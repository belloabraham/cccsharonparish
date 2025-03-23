import {
  Component,
  computed,
  HostBinding,
  inject,
  Injector,
  OnDestroy,
  Signal,
  signal,
} from '@angular/core';
import { SharedModule, UserDataStore } from '../../shared';
import { TuiAlertService, TuiNotification, TuiTextfield } from '@taiga-ui/core';
import {
  contentsToAwaitingApprovalTableUIState,
  ENGLISH_LANG_CODE,
  IAwaitingApprovalContentTableUIState,
  ISpiritualDailyDigest,
  ISpiritualDailyDigestUIState,
  ROUTE,
} from '@cccsharonparish/mydailydigest';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  AlertDialogService,
  ascDescSortCompare,
  ColumnKeys,
  ContentFormComponent,
  ContentStore,
  IDialogData,
  MODULES_FOR_COMPONENTS_USING_TABLES,
} from '../shared';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { DashboardStore } from '../dashboard.store';
import {
  COLLECTION,
  HttpRequestProgressIndicatorService,
  STORAGE_PATH,
} from '../../services';
import { TUI_DEFAULT_MATCHER, tuiIsPresent } from '@taiga-ui/cdk';
import { TuiTablePaginationEvent } from '@taiga-ui/addon-table';
import { LanguageResourceService } from '@cccsharonparish/angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SubSink } from 'subsink';
import { environment } from '../../../environments/environment';
import { DRAFT_STRING_RESOURCE_KEY } from '../awaiting-approval/i18n/string-res-keys';
import { EditorsStore } from '../editors/editors.store';
import { CONTENT_AWAITING_APPROVE_TABLE_COLUMNS } from './awaiting-approval-table';
import { AwaitingApprovalService } from './awaiting-approval.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-awaiting-approval',
  imports: [
    SharedModule,
    TuiTextfield,
    MatButtonModule,
    MatIconModule,
    TuiNotification,
    MatTooltipModule,
    ...MODULES_FOR_COMPONENTS_USING_TABLES,
  ],
  templateUrl: './awaiting-approval.component.html',
  styleUrl: './awaiting-approval.component.scss',
})
export class AwaitingApprovalComponent implements OnDestroy {
  readonly KEY = DRAFT_STRING_RESOURCE_KEY;

  private readonly dialogService = inject(TuiDialogService);
  private readonly alertDialogService = inject(AlertDialogService);
  private readonly awaitingApprovalService = inject(AwaitingApprovalService);
  private readonly alertService = inject(TuiAlertService);
  private readonly router = inject(Router);
  private readonly httpRequestProgressIndicatorService = inject(
    HttpRequestProgressIndicatorService
  );

  private injector = inject(Injector);
  subscriptions = new SubSink();
  contentStore = inject(ContentStore);
  dashboardStore = inject(DashboardStore);

  CDN_BASE_URL = environment.cdnBaseUrl;

  sddForSelectedLanguage = signal<ISpiritualDailyDigest[]>([]);
  @HostBinding('style.height') height = '100%';
  @HostBinding('style.display') display = 'block';

  TABLE_PAGE_SIZE = 100;
  tableColumns = CONTENT_AWAITING_APPROVE_TABLE_COLUMNS;
  readonly sortColumnBy = signal<any | null>(null);
  readonly tablePageSize = signal(100);
  readonly tablePage = signal(0);
  readonly orderDirection = signal<-1 | 1>(-1);
  searchQuery = '';
  data?: Signal<IAwaitingApprovalContentTableUIState[]> = signal([]);
  private readonly editorsStore = inject(EditorsStore);
  private readonly userDataStore = inject(UserDataStore);
  private readonly languageResourceService = inject(LanguageResourceService);

  constructor() {
    this.data = computed(() =>
      this.getData(
        this.sortColumnBy(),
        this.orderDirection(),
        this.tablePage(),
        this.tablePageSize()
      ).filter(tuiIsPresent)
    );
  }

  editContent(
    existingContentTableUIState: IAwaitingApprovalContentTableUIState
  ) {
    const existingContent = this.getExistingContent(
      existingContentTableUIState.id
    );
    const { sn, createdBy, updatedBy, ...existingContentUIState } =
      existingContentTableUIState;
    this.openContentDialog(existingContentUIState, existingContent);
  }

  markAsApprovedPrompt(item: IAwaitingApprovalContentTableUIState) {
    const topic = item.topic;
    const contentAwaitingApproval = this.getExistingContent(item.id);
    this.alertDialogService
      .open(`Are you sure you want to approve ${topic}?`, {
        heading: 'Approve content?',
        buttons: [
          this.languageResourceService.getString(this.KEY.YES),
          this.languageResourceService.getString(this.KEY.NO),
        ],
      })
      .subscribe({
        next: async (isYes) => {
          if (isYes) {
            await this.markAsApproved(topic, contentAwaitingApproval);
          }
        },
      });
  }

  getExistingContent(id: string) {
    return this.contentStore
      .contentAwaitingApproval()
      .find((content) => content.id === id)!;
  }

  async markAsApproved(
    topic: string,
    contentAwaitingApproval: ISpiritualDailyDigest
  ) {
    try {
      this.httpRequestProgressIndicatorService.showLoader();
      await this.awaitingApprovalService.markAsApproved(
        contentAwaitingApproval
      );
      this.updateUIContent(contentAwaitingApproval.id);
      this.loadApprovedContents();
      this.alertService
        .open(`${topic} was approved successfully`, {
          label: 'Approved',
          appearance: 'positive',
        })
        .subscribe();
    } catch (error) {
      this.alertService
        .open(
          `Unable to approve ${topic}, check your internet connection and try again.`,
          {
            label: 'Error',
            appearance: 'negative',
          }
        )
        .subscribe();
    } finally {
      this.httpRequestProgressIndicatorService.hideLoader();
    }
  }

  private updateUIContent(id: string) {
    const contentsAwaitingApproval = this.contentStore
      .contentAwaitingApproval()
      .filter((content) => content.id !== id);
    this.contentStore.updateAwaitingApprovalContents(contentsAwaitingApproval);
  }

  private loadApprovedContents() {
    this.contentStore.getApprovedContents().subscribe({
      next: () => {
        if (this.contentStore.contentAwaitingApproval().length === 0) {
          const translateRouteLanguages = this.getTranslateRouteLanguages();
          this.router.navigate([ROUTE.TRANSLATE, translateRouteLanguages[0].code]);
        }
      },
    });
  }

  getTranslateRouteLanguages() {
    const supportedLanguages =
      this.dashboardStore.supportedLanguages().languages;
    const nonEnglishLanguages = supportedLanguages.filter(
      (lang) => lang.code !== ENGLISH_LANG_CODE
    );
    return nonEnglishLanguages;
  }

  isColumnMatch(value: any): boolean {
    return !!this.searchQuery && TUI_DEFAULT_MATCHER(value, this.searchQuery);
  }

  onPagination({ page, size }: TuiTablePaginationEvent): void {
    this.tablePage.set(page);
    this.tablePageSize.set(size);
  }

  private getData(
    key: ColumnKeys,
    direction: -1 | 1,
    page: number,
    size: number
  ): ReadonlyArray<IAwaitingApprovalContentTableUIState | null> {
    const start = page * size;
    const end = start + size;
    const result = [...this.getTableUIState(start, end)].sort(
      ascDescSortCompare(key, direction)
    );
    return result;
  }

  getTableUIState(start: number, end: number) {
    const contentAwaitingApproval = this.contentStore
      .contentAwaitingApproval()
      .filter((data, index) => {
        return index >= start && index < end;
      });
    const tableUIState = contentsToAwaitingApprovalTableUIState(
      contentAwaitingApproval,
      ENGLISH_LANG_CODE
    );
    return tableUIState;
  }

  openContentDialog(
    existingContentUIState?: ISpiritualDailyDigestUIState,
    existingContent?: ISpiritualDailyDigest
  ) {
    const language = this.dashboardStore
      .supportedLanguages()
      .languages.find((lang) => lang.code === ENGLISH_LANG_CODE);
    this.subscriptions.sink = this.dialogService
      .open<IDialogData | undefined>(
        new PolymorpheusComponent(ContentFormComponent, this.injector),
        {
          data: {
            existingContentUIState: existingContentUIState,
            existingContent: existingContent,
            language: language,
            rootStoragePath: STORAGE_PATH.AWAITING_APPROVAL,
            rootDataPath: COLLECTION.AWAITING_APPROVAL,
          },
          dismissible: false,
          header: this.languageResourceService.getString(
            this.KEY.AWAITING_APPROVAL
          ),
        }
      )
      .subscribe();
  }

  getUserById(userId: string) {
    return (this.editorsStore
      .editors()
      .find((editor) => editor.id === userId) || this.userDataStore.user())!;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

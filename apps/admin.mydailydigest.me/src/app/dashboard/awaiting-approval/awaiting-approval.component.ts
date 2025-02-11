import {
  Component,
  computed,
  HostBinding,
  inject,
  Injector,
  input,
  OnDestroy,
  Signal,
  signal,
} from '@angular/core';
import { SharedModule, UserDataStore } from '../../shared';
import { TuiNotification, TuiTextfield } from '@taiga-ui/core';
import {
  contentsToAwaitingApprovalTableUIState,
  DEFAULT_LANG_CODE,
  IAwaitingApprovalContentTableUIState,
  ISpiritualDailyDigest,
  ISpiritualDailyDigestTableUIState,
  ISpiritualDailyDigestUIState,
} from '@cccsharonparish/mydailydigest';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  AlertDialogService,
  ascDescSortCompare,
  AVERAGE_TABLE_PAGE_SIZE,
  ColumnKeys,
  CONTENT_AWAITING_APPROVE_TABLE_COLUMNS,
  ContentFormComponent,
  ContentStore,
  IDialogData,
  TABLE_MODULES,
} from '../shared';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { DashboardStore } from '../dashboard.store';
import { COLLECTION, STORAGE_PATH } from '../../services';
import { TUI_DEFAULT_MATCHER, tuiIsPresent } from '@taiga-ui/cdk';
import { TuiTablePaginationEvent } from '@taiga-ui/addon-table';
import { LanguageResourceService } from '@cccsharonparish/angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SubSink } from 'subsink';
import { environment } from '../../../environments/environment';
import { DRAFT_STRING_RESOURCE_KEY } from '../awaiting-approval/i18n/string-res-keys';
import { EditorsStore } from '../editors/editors.store';

@Component({
  selector: 'app-awaiting-approval',
  imports: [
    SharedModule,
    TuiTextfield,
    MatButtonModule,
    MatIconModule,
    TuiNotification,
    MatTooltipModule,
    ...TABLE_MODULES,
  ],
  templateUrl: './awaiting-approval.component.html',
  styleUrl: './awaiting-approval.component.scss',
})
export class AwaitingApprovalComponent implements OnDestroy {
  readonly KEY = DRAFT_STRING_RESOURCE_KEY;

  private dialogService = inject(TuiDialogService);
  private readonly alertDialogService = inject(AlertDialogService);

  private injector = inject(Injector);
  subscriptions = new SubSink();
  contentStore = inject(ContentStore);
  dashboardStore = inject(DashboardStore);
  CDN_BASE_URL = environment.cdnBaseUrl;

  sddForSelectedLanguage = signal<ISpiritualDailyDigest[]>([]);
  @HostBinding('style.height') height = '100%';
  @HostBinding('style.display') display = 'block';

  languageCode = input.required<string>({
    alias: 'languageCode',
  });
  title!: Signal<string>;

  AVERAGE_TABLE_PAGE_SIZE = AVERAGE_TABLE_PAGE_SIZE;
  tableColumns = CONTENT_AWAITING_APPROVE_TABLE_COLUMNS;
  readonly sortColumnBy = signal<any | null>(null);
  readonly tablePageSize = signal(AVERAGE_TABLE_PAGE_SIZE);
  readonly tablePage = signal(0);
  readonly orderDirection = signal<-1 | 1>(-1);
  searchQuery = '';
  data?: Signal<IAwaitingApprovalContentTableUIState[]> = signal([]);
  private readonly editorsStore = inject(EditorsStore);
  private readonly userDataStore = inject(UserDataStore);
  private readonly languageResourceService = inject(LanguageResourceService);

  constructor() {
    this.title = computed(() => {
      const title = this.dashboardStore
        .supportedLanguages()
        .languages.filter((lang) => lang.code === this.languageCode())[0].label;
      return title;
    });

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
    existingContentTableUIState: IAwaitingApprovalContentTableUIState,
    existingContent: ISpiritualDailyDigest
  ) {
    const { sn, ...existingContentUIState } = existingContentTableUIState;
    this.openContentDialog(existingContentUIState, existingContent);
  }

  markAsApprovedPrompt(
    topic: string,
    existingContentTableUIState: IAwaitingApprovalContentTableUIState,
    existingContent: ISpiritualDailyDigest
  ) {
    this.alertDialogService
      .open('Are you sure you want to approve ' + topic + '?', {
        heading: 'Approve content?',
        buttons: [
          this.languageResourceService.getString(this.KEY.YES),
          this.languageResourceService.getString(this.KEY.NO),
        ],
      })
      .subscribe({
        next: (isYes) => {
          if (isYes) {
            this.markAsApproved();
          }
        },
      });
  }

  markAsApproved() {}

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
      DEFAULT_LANG_CODE
    );
    return tableUIState;
  }

  openContentDialog(
    existingContentUIState?: ISpiritualDailyDigestUIState,
    existingContent?: ISpiritualDailyDigest
  ) {
    const language = this.dashboardStore
      .supportedLanguages()
      .languages.find((lang) => lang.code === this.languageCode());
    this.subscriptions.sink = this.dialogService
      .open<IDialogData | undefined>(
        new PolymorpheusComponent(ContentFormComponent, this.injector),
        {
          data: {
            existingContentUIState: existingContentUIState,
            existingContent: existingContent,
            language: language,
            rootStoragePath: STORAGE_PATH.DRAFT,
            rootDataPath: COLLECTION.DRAFT,
          },
          dismissible: false,
          header: this.title(),
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

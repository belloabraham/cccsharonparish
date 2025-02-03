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
import { SharedModule } from '../../shared';
import { TUI_DIALOGS, TuiAlertService, TuiTextfield } from '@taiga-ui/core';
import {
  contentsToTableUIState,
  DEFAULT_LANG_CODE,
  ISpiritualDailyDigest,
  ISpiritualDailyDigestTableUIState,
  ISpiritualDailyDigestUIState,
  Language,
} from '@cccsharonparish/mydailydigest';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CONTENT_STRING_RESOURCE_KEYS } from './i18n/string-res-keys';
import {
  AlertDialogService,
  ascDescSortCompare,
  AVERAGE_TABLE_PAGE_SIZE,
  ColumnKeys,
  ContentFormComponent,
  ContentStore,
  EmptyStatusComponent,
  NEW_CONTENT_TABLE_COLUMNS,
  TABLE_MODULES,
} from '../shared';
import { TuiDialogService } from '@taiga-ui/core';
import { Subscription } from 'rxjs';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { NgIf } from '@angular/common';
import { DashboardStore } from '../dashboard.store';
import { COLLECTION, STORAGE_PATH } from '../../services';
import { TUI_DEFAULT_MATCHER, tuiIsPresent } from '@taiga-ui/cdk';
import { TuiTablePaginationEvent } from '@taiga-ui/addon-table';
import { LanguageResourceService } from '@cccsharonparish/angular';

export interface IDialogData {
  language: Language;
  existingContent?: ISpiritualDailyDigest;
  rootStoragePath: string;
  rootDataPath: string;
}

@Component({
  selector: 'app-new-content',
  imports: [
    SharedModule,
    TuiTextfield,
    MatButtonModule,
    MatIconModule,
    EmptyStatusComponent,
    NgIf,
    ...TABLE_MODULES,
  ],
  templateUrl: './new-content.component.html',
  styleUrl: './new-content.component.scss',
})
export class NewContentComponent implements OnDestroy {
  readonly KEY = CONTENT_STRING_RESOURCE_KEYS;
  private dialogService = inject(TuiDialogService);
  private injector = inject(Injector);
  contentFormDialogSubscription = Subscription.EMPTY;
  contentStore = inject(ContentStore);
  dashboardStore = inject(DashboardStore);
  private readonly alertService = inject(TuiAlertService);
  private readonly alertDialogService = inject(AlertDialogService);

  sddForSelectedLanguage = signal<ISpiritualDailyDigest[]>([]);
  @HostBinding('style.height') height = '100%';
  @HostBinding('style.display') display = 'block';

  languageCode = input.required<string>({
    alias: 'languageCode',
  });
  title!: Signal<string>;

  AVERAGE_TABLE_PAGE_SIZE = AVERAGE_TABLE_PAGE_SIZE;
  tableColumns = NEW_CONTENT_TABLE_COLUMNS;
  readonly sortColumnBy = signal<any | null>(null);
  readonly tablePageSize = signal(AVERAGE_TABLE_PAGE_SIZE);
  readonly tablePage = signal(0);
  readonly orderDirection = signal<-1 | 1>(-1);
  searchQuery = '';
  data?: Signal<ISpiritualDailyDigestTableUIState[]> = signal([]);
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

  deleteContentPrompt(data: ISpiritualDailyDigestUIState) {
    this.alertDialogService
      .open(
        this.languageResourceService.getStringWithParameter(
          this.KEY.DELETE_CONTENT_MSG,
          {
            value: data.topic,
          }
        ),
        {
          heading: this.languageResourceService.getString(
            this.KEY.DELETE_CONTENT_QUEST
          ),
          buttons: [
            this.languageResourceService.getString(this.KEY.YES),
            this.languageResourceService.getString(this.KEY.NO),
          ],
        }
      )
      .subscribe({
        next: (isYes) => {
          if (isYes) {
            this.deleteContent(data);
          }
        },
      });
  }

  submitForReviewPrompt(data: ISpiritualDailyDigestUIState) {
    this.alertDialogService
      .open(
        this.languageResourceService.getStringWithParameter(
          this.KEY.SUBMIT_FOR_REVIEW_MSG,
          {
            value: data.topic,
          }
        ),
        {
          heading: this.languageResourceService.getString(
            this.KEY.SUBMIT_FOR_REVIEW_QUEST
          ),
          buttons: [
            this.languageResourceService.getString(this.KEY.YES),
            this.languageResourceService.getString(this.KEY.NO),
          ],
        }
      )
      .subscribe({
        next: (isYes) => {
          if (isYes) {
            this.submitForReview(data);
          }
        },
      });
  }

  submitForReview(data: ISpiritualDailyDigestUIState) {}
  editContent(data: ISpiritualDailyDigestUIState) {}
  deleteContent(data: ISpiritualDailyDigestUIState) {}

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
  ): ReadonlyArray<ISpiritualDailyDigestTableUIState | null> {
    const start = page * size;
    const end = start + size;
    const result = [...this.getTableUIState(start, end)].sort(
      ascDescSortCompare(key, direction)
    );
    return result;
  }

  getTableUIState(start: number, end: number) {
    const publishedContent = this.contentStore
      .draftContents()
      .filter((data, index) => {
        return index >= start && index < end;
      });
    const tableUIState = contentsToTableUIState(
      publishedContent,
      DEFAULT_LANG_CODE
    );
    return tableUIState;
  }

  openContentDialog(selectedContent?: ISpiritualDailyDigest) {
    const language = this.dashboardStore
      .supportedLanguages()
      .languages.find((lang) => lang.code === this.languageCode());
    this.contentFormDialogSubscription = this.dialogService
      .open<IDialogData | undefined>(
        new PolymorpheusComponent(ContentFormComponent, this.injector),
        {
          data: {
            existingContent: selectedContent,
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

  ngOnDestroy(): void {
    this.contentFormDialogSubscription.unsubscribe();
  }
}

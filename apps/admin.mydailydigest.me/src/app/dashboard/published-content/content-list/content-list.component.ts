import {
  Component,
  computed,
  HostBinding,
  inject,
  input,
  Signal,
  signal,
} from '@angular/core';
import { PUBLISHED_CONTENT_LIST_STRING_RESOURCE_KEY } from './i18n/string-res-keys';

import { TuiDataList } from '@taiga-ui/core/components/data-list';
import { TuiFlagPipe } from '@taiga-ui/core/pipes/flag';
import { TuiLanguageSwitcherService } from '@taiga-ui/i18n/utils';
import { TuiBadge } from '@taiga-ui/kit/components/badge';
import { TuiBadgedContent } from '@taiga-ui/kit/components/badged-content';
import { TuiButtonSelect } from '@taiga-ui/kit/directives/button-select';

import { NgForOf, NgOptimizedImage } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import type { TuiTablePaginationEvent } from '@taiga-ui/addon-table';
import { TUI_DEFAULT_MATCHER, tuiIsPresent, TuiLet } from '@taiga-ui/cdk';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { DashboardStore } from '../../dashboard.store';
import { PublishedContentStore } from '../published-content-store';
import {
  contentsToTableUIState,
  DEFAULT_LANG_CODE,
  ISpiritualDailyDigestTableUIState,
  Language,
} from '@cccsharonparish/mydailydigest';
import {
  ascDescSortCompare,
  AVERAGE_TABLE_PAGE_SIZE,
  ColumnKeys,
  getDaysInMonth,
  TABLE_MODULES,
} from '../../shared';
import { PUBLISHED_TABLE_COLUMNS } from '../published-content-table';

@Component({
  selector: 'app-content-list',
  imports: [
    TuiTextfield,
    TuiBadge,
    TuiBadgedContent,
    TuiButton,
    TuiButtonSelect,
    TuiDataList,
    TuiFlagPipe,
    TuiTextfield,
    NgForOf,
    ReactiveFormsModule,
    TuiButton,
    NgOptimizedImage,
    ...TABLE_MODULES,
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {
  @HostBinding('style.height') height = '100%';
  @HostBinding('style.display') display = 'block';

  contentYear = input.required<string>({
    alias: 'contentYear',
  });

  KEY = PUBLISHED_CONTENT_LIST_STRING_RESOURCE_KEY;
  dashboardStore = inject(DashboardStore);
  publishedContentStore = inject(PublishedContentStore);

  readonly languageSwitcher = inject(TuiLanguageSwitcherService);
  readonly languageFC = new FormControl(
    this.dashboardStore.supportedLanguages().languages[0].countryCode
  );

  tableColumns = PUBLISHED_TABLE_COLUMNS;
  AVERAGE_TABLE_PAGE_SIZE = AVERAGE_TABLE_PAGE_SIZE;
  searchQuery = '';
  readonly sortColumnBy = signal<any | null>(null);
  readonly tablePageSize = signal(getDaysInMonth(0));
  readonly tablePage = signal(0);
  private readonly languageCode = signal(DEFAULT_LANG_CODE);
  readonly orderDirection = signal<-1 | 1>(-1);

  data?: Signal<ISpiritualDailyDigestTableUIState[]> = signal([]);

  constructor() {
    this.data = computed(() =>
      this.getData(
        this.sortColumnBy(),
        this.orderDirection(),
        this.languageCode(),
        this.tablePage(),
        this.tablePageSize()
      ).filter(tuiIsPresent)
    );
  }

  onPagination({ page, size }: TuiTablePaginationEvent): void {
    this.tablePage.set(page);
    this.tablePageSize.set(getDaysInMonth(page));
  }

  isColumnMatch(value: any): boolean {
    return !!this.searchQuery && TUI_DEFAULT_MATCHER(value, this.searchQuery);
  }

  private getData(
    key: ColumnKeys,
    direction: -1 | 1,
    languageCode: string,
    page: number,
    size: number
  ): ReadonlyArray<ISpiritualDailyDigestTableUIState | null> {
    const start = page * size;
    const end = start + size;
    const result = [...this.getTableUIState(languageCode, start, end)].sort(
      ascDescSortCompare(key, direction)
    );
    return result;
  }

  public setLang(lang: Language): void {
    this.languageCode.set(lang.code);
    this.languageFC.setValue(lang.countryCode);
    this.languageSwitcher.setLanguage(lang.countryCode);
  }

  getTableUIState(languageCode: string, start: number, end: number) {
    const publishedContent = this.publishedContentStore
      .publishedContentsByAYear()
      .filter((data, index) => {
        return index >= start && index < end;
      });
    const tableUIState = contentsToTableUIState(publishedContent, languageCode);
    return tableUIState;
  }
}

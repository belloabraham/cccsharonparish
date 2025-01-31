import { Component, HostBinding, inject, input } from '@angular/core';
import { SharedModule } from '../../../shared';
import { PUBLISHED_CONTENT_LIST_STRING_RESOURCE_KEY } from './i18n/string-res-keys';

import { TuiDataList } from '@taiga-ui/core/components/data-list';
import { TuiFlagPipe } from '@taiga-ui/core/pipes/flag';
import { TuiLanguageSwitcherService } from '@taiga-ui/i18n/utils';
import { TuiBadge } from '@taiga-ui/kit/components/badge';
import { TuiBadgedContent } from '@taiga-ui/kit/components/badged-content';
import { TuiButtonSelect } from '@taiga-ui/kit/directives/button-select';

import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import type {
  TuiComparator,
  TuiTablePaginationEvent,
} from '@taiga-ui/addon-table';
import { TuiTable, TuiTablePagination } from '@taiga-ui/addon-table';
import {
  TUI_DEFAULT_MATCHER,
  tuiDefaultSort,
  tuiIsPresent,
  TuiLet,
} from '@taiga-ui/cdk';
import {
  TuiButton,
  TuiTextfield,
  TuiWithTextfieldDropdown,
} from '@taiga-ui/core';
import type { Observable } from 'rxjs';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  of,
  share,
  startWith,
  switchMap,
} from 'rxjs';
import { DashboardStore } from '../../dashboard.store';
import { PublishedContentStore } from '../published-content-store';
import {
  DEFAULT_LANG_CODE,
  ISpiritualDailyDigestTableUIState,
  Language,
} from '@cccsharonparish/mydailydigest';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';

type Key = keyof ISpiritualDailyDigestTableUIState;

function sortBy(
  key: Key,
  direction: -1 | 1
): TuiComparator<ISpiritualDailyDigestTableUIState> {
  return (a, b) => direction * tuiDefaultSort(a[key], b[key]);
}

@Component({
  selector: 'app-content-list',
  imports: [
    SharedModule,
    TuiTextfield,
    TuiWithTextfieldDropdown,
    CdkFixedSizeVirtualScroll,
    CdkVirtualScrollViewport,
    TuiBadge,
    TuiBadgedContent,
    TuiButton,
    TuiButtonSelect,
    TuiDataList,
    TuiFlagPipe,
    TuiTextfield,
    AsyncPipe,
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    TuiButton,
    TuiLet,
    TuiTable,
    TuiTablePagination,
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
  readonly TABLE_PAGE_SIZE = 31;

  protected readonly switcher = inject(TuiLanguageSwitcherService);
  protected readonly languageFC = new FormControl(
    this.dashboardStore.supportedLanguages().languages[0].countryCode
  );

  private readonly size$ = new BehaviorSubject(this.TABLE_PAGE_SIZE);
  protected readonly page$ = new BehaviorSubject(0);
  private readonly language$ = new BehaviorSubject(DEFAULT_LANG_CODE);
  protected readonly direction$ = new BehaviorSubject<-1 | 1>(-1);

  sddStateKeys: ISpiritualDailyDigestTableUIState = {
    date: '',
    topic: '',
    message: '',
    reference: '',
    imageUrl: '',
    audioUrl: '',
  };
  protected columns = Object.keys(
    this.sddStateKeys
  ) as (keyof ISpiritualDailyDigestTableUIState)[];
  protected readonly sorter$ = new BehaviorSubject<any>('');

  protected readonly request$ = combineLatest([
    this.sorter$,
    this.direction$,
    this.language$,
    this.page$,
    this.size$,
  ]).pipe(
    switchMap((query) => this.getData(...query)),
    share()
  );

  protected searchQuery = '';

  protected readonly data$: Observable<
    readonly ISpiritualDailyDigestTableUIState[]
  > = this.request$.pipe(
    filter(tuiIsPresent),
    map((data) => data.filter(tuiIsPresent)),
    startWith([])
  );

  protected onPagination({ page, size }: TuiTablePaginationEvent): void {
    this.page$.next(page);
    this.size$.next(size);
  }

  protected isMatch(value: unknown): boolean {
    return !!this.searchQuery && TUI_DEFAULT_MATCHER(value, this.searchQuery);
  }

  private getData(
    key: Key,
    direction: -1 | 1,
    languageCode: string,
    page: number,
    size: number
  ): Observable<ReadonlyArray<ISpiritualDailyDigestTableUIState | null>> {
    const start = page * size;
    const end = start + size;
    const result = [...this.getTableUIState(languageCode, start, end)].sort(
      sortBy(key, direction)
    );
    return of(result);
  }

  public setLang(lang: Language): void {
    this.language$.next(lang.code);
    this.languageFC.setValue(lang.countryCode);
    this.switcher.setLanguage(lang.countryCode);
  }

  getTableUIState(languageCode: string, start: number, end: number) {
    const publishedContent =
      this.publishedContentStore.publishedContentsByAYear();
    return publishedContent
      .filter((data, index) => {
        return index >= start && index < end;
      })
      .map((contentState, index) => {
        const content = contentState.content.find(
          (c) => c.language.code === languageCode
        )!;
        if (!content) {
          return null;
        }
        const date = new Date(
          contentState.year,
          contentState.month - 1,
          contentState.day
        ).toDateString();
        const tableState: ISpiritualDailyDigestTableUIState = {
          topic: content.text.topic,
          message: content.text.message,
          reference: content.text.bibleVerse.reference,
          date: date,
          imageUrl: contentState.imageUrl,
          audioUrl: content.audioUrl,
        };
        return tableState;
      })
      .filter((item) => item != null);
  }
}

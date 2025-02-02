import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { DatePipe, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { NgAudioPlayerComponent } from '@cccsharonparish/angular';
import {
  ISpiritualDailyDigestTableUIState,
  ISpiritualDailyDigestUIState,
} from '@cccsharonparish/mydailydigest';
import {
  TuiComparator,
  TuiTable,
  TuiTablePagination,
} from '@taiga-ui/addon-table';
import { tuiDefaultSort, TuiLet } from '@taiga-ui/cdk';
import { TuiDataList, TuiTextfield } from '@taiga-ui/core';
import { TuiBadgedContent } from '@taiga-ui/kit';
import { SharedModule } from '../../shared';
import { FormsModule } from '@angular/forms';
import { TuiScrollable, TuiScrollbar } from '@taiga-ui/core';

export const AVERAGE_TABLE_PAGE_SIZE = 31;

export type ColumnKeys = keyof ISpiritualDailyDigestTableUIState;

export function ascDescSortCompare(
  key: ColumnKeys,
  direction: -1 | 1
): TuiComparator<ISpiritualDailyDigestTableUIState> {
  return (a, b) => direction * tuiDefaultSort(a[key], b[key]);
}

const publishedTableStateKeys = {
  sn: 0,
  date: new Date(),
  topic: '',
  message: '',
  reference: '',
  imagePath: '',
  audioUrl: '',
};

export const PUBLISHED_TABLE_COLUMNS = Object.keys(
  publishedTableStateKeys
) as (keyof ISpiritualDailyDigestUIState)[];

const newContentTableStateKeys = {
  sn: 0,
  date: new Date(),
  topic: '',
  message: '',
  reference: '',
  verses: '',
  keyVerse: '',
  imagePath: '',
  audioUrl: '',
  tags: [],
};

export const NEW_CONTENT_TABLE_COLUMNS = Object.keys(
  newContentTableStateKeys
) as (keyof (ISpiritualDailyDigestUIState & { sn: number }))[];

export const TABLE_MODULES = [
  SharedModule,
  TuiTextfield,
  CdkFixedSizeVirtualScroll,
  CdkVirtualScrollViewport,
  TuiBadgedContent,
  TuiDataList,
  TuiTextfield,
  TuiLet,
  TuiTable,
  TuiTablePagination,
  NgAudioPlayerComponent,
  DatePipe,
  MatRippleModule,
  NgOptimizedImage,
  FormsModule,
  NgFor,
  TuiScrollable,
  TuiScrollbar,
  NgIf,
];

export function getDaysInMonth(
  month: number,
  year: number = new Date().getFullYear()
): number {
  if (month < 0 || month > 11) {
    throw new Error(
      'Invalid month. Month should be between 0 (January) and 11 (December).'
    );
  }
  return new Date(year, month + 1, 0).getDate();
}

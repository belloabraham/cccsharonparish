import {
  ISpiritualDailyDigestTableUIState,
  ISpiritualDailyDigestUIState,
} from '@cccsharonparish/mydailydigest';
import { TuiComparator } from '@taiga-ui/addon-table';
import { tuiDefaultSort } from '@taiga-ui/cdk';

export const TABLE_PAGE_SIZE = 31;

export type ColumnKeys = keyof ISpiritualDailyDigestTableUIState;

export function ascDescSortCompare(
  key: ColumnKeys,
  direction: -1 | 1
): TuiComparator<ISpiritualDailyDigestTableUIState> {
  return (a, b) => direction * tuiDefaultSort(a[key], b[key]);
}

const sddStateKeys = {
  sn: 0,
  date: new Date(),
  topic: '',
  message: '',
  reference: '',
  imageUrl: '',
  audioUrl: '',
};

export const PUBLISHED_TABLE_COLUMNS = Object.keys(
  sddStateKeys
) as (keyof ISpiritualDailyDigestUIState)[];

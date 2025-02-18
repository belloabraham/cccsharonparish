import { IUser } from '@cccsharonparish/mydailydigest';
import { TuiComparator } from '@taiga-ui/addon-table';
import { tuiDefaultSort } from '@taiga-ui/cdk';

const editorsTableUIState = {
  sn: 0,
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  userType: 'Editors',
};
export type ColumnKeys = keyof EditorTableUIState;

export type EditorTableUIState = IUser & { sn: number };

export const EDITORS_TABLE_COLUMNS = Object.keys(
  editorsTableUIState
) as (keyof (IUser & { sn: number }))[];

export function ascDescSortCompare(
  key: ColumnKeys,
  direction: -1 | 1
): TuiComparator<EditorTableUIState> {
  return (a, b) => direction * tuiDefaultSort(a[key], b[key]);
}

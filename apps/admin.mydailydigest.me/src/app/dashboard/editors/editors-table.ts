import { IUser } from '@cccsharonparish/mydailydigest';
import { TuiComparator } from '@taiga-ui/addon-table';
import { tuiDefaultSort } from '@taiga-ui/cdk';

const editorsTableUIState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  userType: 'Editors',
};
export type ColumnKeys = keyof IUser;

export const EDITORS_TABLE_COLUMNS = Object.keys(
  editorsTableUIState
) as (keyof (IUser & { sn: number }))[];

export function ascDescSortCompare(
  key: ColumnKeys,
  direction: -1 | 1
): TuiComparator<IUser> {
  return (a, b) => direction * tuiDefaultSort(a[key], b[key]);
}

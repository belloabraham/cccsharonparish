import {
  Component,
  computed,
  HostBinding,
  inject,
  Signal,
  signal,
} from '@angular/core';
import { SharedModule } from '../../shared';
import { EDITORS_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { TuiDialogService } from '@taiga-ui/core';
import { EditorsStore } from './editors.store';
import {
  ascDescSortCompare,
  ColumnKeys,
  EDITORS_TABLE_COLUMNS,
} from './editors-table';
import { IUser } from '@cccsharonparish/mydailydigest';
import { LanguageResourceService } from '@cccsharonparish/angular';
import { TUI_DEFAULT_MATCHER, tuiIsPresent } from '@taiga-ui/cdk';
import { TuiTablePaginationEvent } from '@taiga-ui/addon-table';
import { TABLE_MODULES } from '../shared';

@Component({
  selector: 'app-editors',
  imports: [SharedModule, ...TABLE_MODULES],
  templateUrl: './editors.component.html',
  styleUrl: './editors.component.scss',
})
export class EditorsComponent {
  KEY = EDITORS_STRING_RESOURCE_KEY;
  private dialogService = inject(TuiDialogService);
  readonly editorsStore = inject(EditorsStore);
  @HostBinding('style.height') height = '100%';
  @HostBinding('style.display') display = 'block';
  readonly tablePage = signal(0);
  readonly orderDirection = signal<-1 | 1>(-1);
  tableColumns = EDITORS_TABLE_COLUMNS;
  searchQuery = '';
  data?: Signal<IUser[]> = signal([]);
  readonly sortColumnBy = signal<any | null>(null);
  private readonly languageResourceService = inject(LanguageResourceService);
  TABLE_PAGE_SIZE = 100;
  readonly tablePageSize = signal(100);

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

  onPagination({ page, size }: TuiTablePaginationEvent): void {
    this.tablePage.set(page);
    this.tablePageSize.set(size);
  }

  isColumnMatch(value: any): boolean {
    return !!this.searchQuery && TUI_DEFAULT_MATCHER(value, this.searchQuery);
  }

  private getData(
    key: ColumnKeys,
    direction: -1 | 1,
    page: number,
    size: number
  ): ReadonlyArray<IUser | null> {
    const start = page * size;
    const end = start + size;
    const result = [...this.getTableUIState(start, end)].sort(
      ascDescSortCompare(key, direction)
    );
    return result;
  }

  getTableUIState(start: number, end: number) {
    const editorsContent = this.editorsStore.editors().filter((data, index) => {
      return index >= start && index < end;
    });
    return editorsContent;
  }
}

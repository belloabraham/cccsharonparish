import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
  OnDestroy,
  Signal,
  signal,
} from '@angular/core';
import { SharedModule } from '../../shared';
import { EDITORS_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { EditorsStore } from './editors.store';
import {
  ascDescSortCompare,
  ColumnKeys,
  EDITORS_TABLE_COLUMNS,
  EditorTableUIState,
} from './editors-table';
import { LanguageResourceService } from '@cccsharonparish/angular';
import { TUI_DEFAULT_MATCHER, tuiIsPresent } from '@taiga-ui/cdk';
import { TuiTablePaginationEvent } from '@taiga-ui/addon-table';
import {
  AlertDialogService,
  MODULES_FOR_COMPONENTS_USING_TABLES,
} from '../shared';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { EditorsService } from './editors.service';
import { SubSink } from 'subsink';
import { TuiAlertService } from '@taiga-ui/core';
import { UserType } from '@cccsharonparish/mydailydigest';
import { HttpRequestProgressIndicatorService } from '../../services';

@Component({
  selector: 'app-editors',
  host: { style: 'display: block;' },
  imports: [
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    ...MODULES_FOR_COMPONENTS_USING_TABLES,
  ],
  templateUrl: './editors.component.html',
  styleUrl: './editors.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class EditorsComponent implements OnDestroy {
  KEY = EDITORS_STRING_RESOURCE_KEY;
  private readonly alertDialogService = inject(AlertDialogService);
  readonly editorsStore = inject(EditorsStore);
  private readonly editorService = inject(EditorsService);
  @HostBinding('style.height') height = '100%';
  @HostBinding('style.display') display = 'block';
  readonly tablePage = signal(0);
  readonly orderDirection = signal<-1 | 1>(-1);
  tableColumns = EDITORS_TABLE_COLUMNS;
  searchQuery = '';
  data?: Signal<EditorTableUIState[]> = signal([]);
  readonly sortColumnBy = signal<any | null>(null);
  private readonly languageResourceService = inject(LanguageResourceService);
  TABLE_PAGE_SIZE = 100;
  readonly tablePageSize = signal(100);
  subscriptions = new SubSink();
  private readonly alertService = inject(TuiAlertService);
  private readonly httpRequestProgressIndicatorService = inject(
    HttpRequestProgressIndicatorService
  );

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

  changeUserTypePrompt(editorTableUIState: EditorTableUIState) {
    const editorTypeMessage = `Are you sure you want to limit ${editorTableUIState.firstName} ${editorTableUIState.lastName} to writing content only?`;
    const publisherTypeMessage = `Are you sure you want to grant ${editorTableUIState.firstName} ${editorTableUIState.lastName} the permission to write, approve and publish content?`;
    const userType = editorTableUIState.userType;
    this.alertDialogService
      .open(userType === 'Editor' ? publisherTypeMessage : editorTypeMessage, {
        heading: `Make ${userType === 'Editor' ? 'a Publisher' : 'an Editor'}?`,
        buttons: [
          this.languageResourceService.getString(this.KEY.YES),
          this.languageResourceService.getString(this.KEY.NO),
        ],
      })
      .subscribe({
        next: async (isYes) => {
          if (isYes) {
            this.changeUserType(editorTableUIState);
          }
        },
      });
  }

  changeUserType(editorTableUIState: EditorTableUIState) {
    const updatedUserType: UserType =
      editorTableUIState.userType === 'Editor' ? 'Publisher' : 'Editor';
    this.httpRequestProgressIndicatorService.showLoader();
    this.subscriptions.sink = this.editorService
      .changeUserType(editorTableUIState.id, { userType: updatedUserType })
      .subscribe({
        next: () => {
          this.httpRequestProgressIndicatorService.hideLoader();
          const editors = this.editorsStore.editors();
          editors.find(
            (editor) => editor.id === editorTableUIState.id
          )!.userType = updatedUserType;
          this.editorsStore.updateEditors([...editors]);
          this.alertService
            .open('Update was successful', {
              label: 'User type was updated successfully',
              appearance: 'positive',
            })
            .subscribe();
        },
        error: (error) => {
          this.httpRequestProgressIndicatorService.hideLoader();
          this.alertService
            .open('Error', {
              label:
                'Unable to update user type, check your internet connection and try again',
              appearance: 'negative',
            })
            .subscribe();
        },
      });
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
  ): ReadonlyArray<EditorTableUIState | null> {
    const start = page * size;
    const end = start + size;
    const result = [...this.getTableUIState(start, end)].sort(
      ascDescSortCompare(key, direction)
    );
    return result;
  }

  getTableUIState(start: number, end: number): EditorTableUIState[] {
    const users = this.editorsStore.editors().filter((data, index) => {
      return index >= start && index < end;
    });
    return users.map((user, index) => {
      const editor: EditorTableUIState = {
        sn: index + 1,
        ...user,
      };
      return editor;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

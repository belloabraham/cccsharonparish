import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  input,
  OnDestroy,
  Signal,
  signal,
} from '@angular/core';
import { SharedModule } from '../../shared';
import { TuiTextfield } from '@taiga-ui/core';
import {
  ISpiritualDailyDigest,
  Language,
} from '@cccsharonparish/mydailydigest';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CONTENT_STRING_RESOURCE_KEYS } from './i18n/string-res-keys';
import { EmptyStatusComponent } from '../shared';
import { ContentFormComponent } from './content-form/content-form.component';
import { TuiDialogService } from '@taiga-ui/core';
import { Subscription } from 'rxjs';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { ContentStore } from './content.store';
import { NgIf } from '@angular/common';
import { DashboardStore } from '../dashboard.store';
import { COLLECTION, STORAGE_PATH } from '../../services';

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

  sddForSelectedLanguage = signal<ISpiritualDailyDigest[]>([]);

  languageCode = input.required<string>({
    alias: 'languageCode',
  });
  title!: Signal<string>;

  constructor() {
    this.title = computed(() => {
      const title = this.dashboardStore
        .supportedLanguages()
        .languages.filter((lang) => lang.code === this.languageCode())[0].label;
      return title;
    });
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

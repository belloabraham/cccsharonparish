import {
  Component,
  effect,
  inject,
  Injector,
  input,
  OnDestroy,
  signal,
} from '@angular/core';
import { SharedModule } from '../../shared';
import { tuiDialog, TuiTextfield } from '@taiga-ui/core';
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

@Component({
  selector: 'app-new-content',
  imports: [
    SharedModule,
    TuiTextfield,
    MatButtonModule,
    MatIconModule,
    EmptyStatusComponent,
    // ContentFormComponent,
  ],
  templateUrl: './new-content.component.html',
  styleUrl: './new-content.component.scss',
})
export class NewContentComponent implements OnDestroy {
  readonly KEY = CONTENT_STRING_RESOURCE_KEYS;
  private dialogService = inject(TuiDialogService);
  private injector = inject(Injector);
  contentFormDialogSubscription = Subscription.EMPTY;

  languageCode = input.required<string>({
    alias: 'languageCode',
  });
  title = signal('');
  supportedLanguages = signal<Language[]>([
    {
      label: 'Yoruba',
      code: 'yr',
    },
    {
      label: 'English',
      code: 'en',
    },
    {
      label: 'French',
      code: 'fr',
    },
  ]);
  constructor() {
    effect(() => {
      const title = this.supportedLanguages().filter(
        (lang) => lang.code === this.languageCode()
      )[0].label;
      this.title.set(title);
    });
  }

  openContentDialog(selectedContent?: ISpiritualDailyDigest) {
    this.contentFormDialogSubscription = this.dialogService
      .open<ISpiritualDailyDigest>(
        new PolymorpheusComponent(ContentFormComponent, this.injector),
        {
          data: selectedContent,
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

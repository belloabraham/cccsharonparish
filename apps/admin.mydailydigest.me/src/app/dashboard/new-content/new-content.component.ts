import { Component, effect, input, signal } from '@angular/core';
import { SharedModule } from '../../shared';
import { TuiTextfield } from '@taiga-ui/core';
import { Language } from '@cccsharonparish/mydailydigest';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CONTENT_STRING_RESOURCE_KEYS } from './i18n/string-res-keys';
import { EmptyStatusComponent } from '../shared';

@Component({
  selector: 'app-new-content',
  imports: [SharedModule, TuiTextfield, MatButtonModule, MatIconModule, EmptyStatusComponent],
  templateUrl: './new-content.component.html',
  styleUrl: './new-content.component.scss',
})
export class NewContentComponent {
  readonly KEY = CONTENT_STRING_RESOURCE_KEYS;
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
}

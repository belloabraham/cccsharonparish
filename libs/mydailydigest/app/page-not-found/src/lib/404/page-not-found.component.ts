import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguageResourceKey } from './i18n/language-resource-key';

@Component({
  selector: 'mydailydigest-page-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage, TranslocoModule],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyDailyDigestPageNotFoundComponent {
  root = '';
  languageResourceKey = LanguageResourceKey;
}

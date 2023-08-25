import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDailyDigestPageNotFoundComponent } from '@cccsharonparish.org/mydailydigest/app/page-not-found';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, TranslocoModule, MyDailyDigestPageNotFoundComponent],
  templateUrl: './page-not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}

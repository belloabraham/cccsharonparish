import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { TuiPopover } from '@taiga-ui/cdk';
import { TuiDialogCloseService } from '@taiga-ui/core';
import {
  injectContext,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';
import { AlertPromptOptions } from './alert-prompt-options';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-alert-dialog',
  imports: [PolymorpheusOutlet, PolymorpheusTemplate, MatButtonModule],
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
  providers: [TuiDialogCloseService],
})
export class AlertDialogComponent {
  protected readonly context =
    injectContext<TuiPopover<AlertPromptOptions, boolean>>();

  constructor() {
    inject(TuiDialogCloseService)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.context.$implicit.complete());
  }

  protected onClick(response: boolean): void {
    this.context.completeWith(response);
  }
}

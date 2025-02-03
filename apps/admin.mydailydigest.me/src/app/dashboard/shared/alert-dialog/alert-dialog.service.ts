import { Injectable } from '@angular/core';
import { TuiPopoverService } from '@taiga-ui/cdk';
import { TUI_DIALOGS } from '@taiga-ui/core';
import { AlertPromptOptions } from './alert-prompt-options';
import { AlertDialogComponent } from './alert-dialog.component';

@Injectable({
  providedIn: 'any',
  useFactory: () =>
    new AlertDialogService(TUI_DIALOGS, AlertDialogComponent, {
      heading: 'Are you sure?',
      buttons: ['Yes', 'No'],
    }),
})
export class AlertDialogService extends TuiPopoverService<
  AlertPromptOptions,
  boolean
> {}

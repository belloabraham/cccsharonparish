import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-status',
  imports: [],
  templateUrl: './empty-status.component.html',
  styleUrl: './empty-status.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class EmptyStatusComponent {
  image = input<string | undefined>(undefined);
  description = input.required<string>();
}

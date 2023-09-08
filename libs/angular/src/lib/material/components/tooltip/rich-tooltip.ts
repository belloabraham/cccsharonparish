import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MDCTooltip } from '@material/tooltip';
import { NgMaterialButtonModule } from '../../ng-mat-button.module';

@Component({
  selector: 'ng-mat-rich-tooltip',
  standalone: true,
  imports: [CommonModule, NgMaterialButtonModule],
  templateUrl: './rich-tooltip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgMaterialRichTooltipComponent implements AfterViewChecked {

  ngAfterViewChecked(): void {
    new MDCTooltip(this.tooltip.nativeElement);
  }

  @ViewChild('mdcTooltip') tooltip!: ElementRef;
  @Input() role: 'tooltip' | 'dialog' = 'tooltip';
  @Input() persistent = false;
  @Input({ required: true }) id!: string;
}

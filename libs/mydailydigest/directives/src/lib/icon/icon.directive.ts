import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[mdd-icon]',
  standalone: true,
})
export class MDDIconDirective implements OnChanges {
  @Input('mdd-icon') name!: string;
  @Input() position: 'start' | 'end' = 'start';

  ngOnChanges(changes: SimpleChanges): void {
    this.hostElementClasses = this.getHostElementClasses();
  }

  @HostBinding('class') hostElementClasses = this.getHostElementClasses();

  private getHostElementClasses() {
    return `mdd-i-${this.name} mdd-i-${this.position}`;
  }
}

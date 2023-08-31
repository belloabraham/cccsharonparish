import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[mdd-button]',
  standalone: true,
})
export class ButtonDirective implements OnChanges {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @Input() variant: 'close' | 'check' | 'btn' = 'btn';

  @Input() size: 'sm' | 'lg' | 'md' = 'md';

  @Input() outlined = false;

  @Input() color: 'primary'| 'secondary' | 'success' | 'danger' | 'warning' | 'dark' | 'light' | 'info' | 'link' = 'primary';

  ngOnChanges(changes: SimpleChanges): void {
    this.hostElementClasses = this.getHostElementClasses();
  }

  @HostBinding('class') hostElementClasses = this.getHostElementClasses();

  private getHostElementClasses() {
    const variant = this.variant === 'btn' ? 'btn' : `btn-${this.variant}`;
    const color = this.outlined
      ? `btn-outline-${this.color}`
      : `btn-${this.color}`;
    const classes = `${variant} ${color} btn-${this.size}`;
    return classes;
  }
}

import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[mdd-badge]',
  standalone: true,
})
export class MDDBadgeDirective implements OnChanges {

  @Input() background:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'dark'
    | 'light'
    | 'info'
    | 'link' = 'primary';

      @Input() posTopRight= true;

  ngOnChanges(changes: SimpleChanges): void {
    this.hostElementClasses = this.getHostElementClasses();
  }

  @HostBinding('class') hostElementClasses = this.getHostElementClasses();

  private getHostElementClasses() {
    const topRightPos =
      this.posTopRight === true
        ? 'top-0 translate-middle position-absolute start-100'
        : 'ms-1';
    return `badge text-bg-${this.background} ${topRightPos}`;
  }
}

@Directive({
  selector: 'span[mdd-badge-rounded]',
  standalone: true,
})
export class MDDBadgeRoundedDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'rounded-pill');
    this.renderer.addClass(this.elementRef.nativeElement, 'p-1');
  }
}

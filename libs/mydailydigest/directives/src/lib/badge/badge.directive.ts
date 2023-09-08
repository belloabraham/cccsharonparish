import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[mdd-badge]',
  standalone: true,
})
export class MDDBadgeDirective implements OnChanges, OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'badge');
    this.renderer.addClass(this.elementRef.nativeElement, 'position-absolute');
    this.renderer.addClass(this.elementRef.nativeElement, 'top-0');
    this.renderer.addClass(this.elementRef.nativeElement, 'start-100');
    this.renderer.addClass(this.elementRef.nativeElement, 'translate-middle');
  }

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

  ngOnChanges(changes: SimpleChanges): void {
    this.hostElementClasses = this.getHostElementClasses();
  }

  @HostBinding('class') hostElementClasses = this.getHostElementClasses();

  private getHostElementClasses() {
    return `text-bg-${this.background}`;
  }
}

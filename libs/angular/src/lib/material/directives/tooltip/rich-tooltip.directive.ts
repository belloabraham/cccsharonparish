import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'a[ng-mat-rich-tooltip], button[ng-mat-rich-tooltip]',
  exportAs: 'ngMatRichTooltipButton',
  standalone: true,
})
export class NgMatRichTooltipButtonDirective implements OnInit {
  @Input({ required: true }) id!: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'data-tooltip-id',
      this.id
    );
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'aria-haspopup',
      'dialog'
    );
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'aria-expanded',
      'false'
    );
  }
}

@Directive({
  selector: '[ng-mat-tooltip-content-link]',
  standalone: true,
})
export class NgMatTooltipContentLinkDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.renderer.addClass(
      this.elementRef.nativeElement,
      'mdc-tooltip__content-link'
    );
  }
}

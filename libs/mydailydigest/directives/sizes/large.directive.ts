import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[large]',
  standalone: true,
})
export class LargeDirective implements OnInit {
  constructor(private rederer2: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    const elementType = Object.create(this.elementRef.nativeElement);
    if (
      elementType instanceof HTMLAnchorElement ||
      elementType instanceof HTMLButtonElement
    ) {
      this.rederer2.addClass(this.elementRef.nativeElement, 'btn-lg');
    }
  }
}

import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mdd-button]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  constructor(private rederer2: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.rederer2.addClass(this.elementRef.nativeElement, 'btn');
  }
}

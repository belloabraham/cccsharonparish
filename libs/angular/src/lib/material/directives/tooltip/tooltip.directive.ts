import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { MDCTooltip } from '@material/tooltip';


@Directive({
  selector: 'a[ng-mat-tooltip], button[ng-mat-tooltip]',
  exportAs: 'ngMatTooltipButton',
  standalone: true,
})
export class NgMatTooltipButtonDirective implements OnInit {
  @Input({required:true}) id!: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'aria-describedby',
      this.id
    );
  }
}

@Directive({
  selector: 'div[ng-mat-tooltip]',
  exportAs: 'ngMatPlainTooltip',
  standalone: true,
})
export class NgMatTooltipDirective implements AfterViewInit, OnInit, OnChanges {
  @Input({required:true}) id!: string;
  @HostBinding('id') hostElementId = this.id;
  @Input() hideDelay = 300;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'mdc-tooltip');
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'role',
      'tooltip'
    );
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'aria-hidden',
      'true'
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.hostElementId = this.id;
  }
  ngAfterViewInit(): void {
    new MDCTooltip(this.elementRef.nativeElement).setHideDelay(
      this.hideDelay
    );
  }
}

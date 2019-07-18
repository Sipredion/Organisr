import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[organisrButton]'
})
export class ButtonDirective implements OnInit {

  @Input() color: 'primary' | 'accent' | 'danger';
  @Input() size: string;
  @Input() isDisabled?: boolean;

  private buttonColor = '0, 0, 0';
  private buttonFocusColor: string;

  constructor(private btn: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  hover() {
    if (!this.isDisabled) {
      this.onHover();
    }
  }

  @HostListener('mouseleave')
  unHover() {
    this.disableHover();
  }

  @HostListener('mousedown')
  click() {
    if (!this.isDisabled) {
      this.onMouseClick();
    }
  }

  @HostListener('mouseup')
  unClick() {
    this.restoreDefault();
  }

  @HostListener('focus')
  focus() {
    if (!this.isDisabled) {
      this.onFocus();
    }
  }

  @HostListener('focusout')
  unFocus() {
    this.disableFocus();
  }

  ngOnInit() {
    this.initializeButtonStyle(this.btn.nativeElement);
  }

  // Button State Functions //

  onHover() {
    this.renderer.setStyle(this.btn.nativeElement, 'backgroundColor', `rgba(${this.buttonColor}, 0.4)`);
  }

  disableHover() {
    this.renderer.setStyle(this.btn.nativeElement, 'backgroundColor', 'transparent');
  }

  onMouseClick() {
    this.renderer.setStyle(
      this.btn.nativeElement,
      'box-shadow',
      `inset 0 2px 4px rgba(${this.buttonColor}, 0.4), 0 0 1px rgba(${this.buttonColor}, 0.4)`
    );
  }

  onFocus() {
    this.renderer.setStyle(this.btn.nativeElement, 'outline', `rgb(${this.buttonColor}) auto 2px`);
  }

  disableFocus() {
    this.renderer.setStyle(this.btn.nativeElement, 'outline', 'none');
  }

  restoreDefault() {
    this.renderer.setStyle(
      this.btn.nativeElement,
      'box-shadow',
      `0 2px 4px rgba(${this.buttonColor}, 0.4), 0 0 1px rgba(${this.buttonColor}, 0.4)`
    );
  }

  private initializeButtonStyle(btn: HTMLElement) {
    this.clearDefaultStyle(btn);
    this.renderer.setStyle(btn, 'border-radius', '4px');
    this.renderer.setStyle(btn, 'padding', '.3rem');
    this.renderer.setStyle(btn, 'box-shadow', '0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1)')
    this.renderer.setStyle(btn, 'transition', 'all .3s ease');
    this.renderer.setStyle(btn, 'cursor', 'pointer')
  }

  private clearDefaultStyle(btn: HTMLElement) {
    this.renderer.setStyle(btn, 'border', 'none');
    this.renderer.setStyle(btn, 'backgroundColor', 'transparent');
  }

}

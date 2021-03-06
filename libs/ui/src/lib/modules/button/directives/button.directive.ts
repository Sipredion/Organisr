import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import { buttonSize, themeType } from '@organisr/data';

@Directive({
  selector: '[organisrButton]'
})
export class ButtonDirective implements OnInit, OnChanges {

  @Input() color: themeType;
  @Input() size: buttonSize;
  @Input() isDisabled?: boolean;

  private buttonColor = '0, 0, 0';
  private buttonFocusColor: string;

  constructor(private btn: ElementRef,
              private renderer: Renderer2,
              private uiService: UiService) {
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['color'] && !changes['color'].isFirstChange()) {
      this.setButtonColor(changes['color'].currentValue, this.isDisabled, this.btn.nativeElement);
      this.renderer.setStyle(this.btn.nativeElement, 'border', `1px solid rgb(${this.buttonColor})`);
    }
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
      `0 2px 4px rgba(${this.buttonColor}, 0.4), 0 0 1px rgba(${this.buttonColor}, 0.1)`
    );
  }

  private initializeButtonStyle(btn: HTMLElement) {
    this.clearDefaultStyle(btn);
    this.setButtonColor(this.color, this.isDisabled, btn);
    this.setButtonSize(this.size, btn);
    this.renderer.setStyle(btn, 'border-radius', '2px');
    this.renderer.setStyle(btn, 'padding', '.3rem');
    this.renderer.setStyle(btn, 'box-shadow', '0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1)')
    this.renderer.setStyle(btn, 'transition', 'all .3s ease');
    this.renderer.setStyle(btn, 'cursor', 'pointer');
    this.renderer.setStyle(btn, 'color', `rgb(${this.buttonColor})`);
    this.renderer.setStyle(btn, 'border', `1px solid rgb(${this.buttonColor})`);
    this.renderer.setStyle(btn, 'text-shadow', `0 1px 3px rgba(0, 0, 0, 0.2)`);
    this.renderer.setStyle(
      btn,
      'box-shadow',
      `0 2px 4px rgba(${this.buttonColor}, 0.4), 0 0 1px rgba(${this.buttonColor}, 0.4)`
    );
  }

  private clearDefaultStyle(btn: HTMLElement) {
    this.renderer.setStyle(btn, 'border', '0');
    this.renderer.setStyle(btn, 'backgroundColor', 'transparent');
  }

  protected setButtonColor(color: string, disabled: boolean, btn: HTMLElement) {
    const {primary, accent, danger} = this.uiService.applicationTheme;
    if (!disabled) {
      switch (color) {
        case 'primary':
          this.buttonColor = primary;
          this.renderer.setStyle(btn, 'cursor', 'pointer');
          this.renderer.setStyle(btn, 'opacity', '1');
          break;
        case 'accent':
          this.buttonColor = accent;
          this.renderer.setStyle(btn, 'cursor', 'pointer');
          this.renderer.setStyle(btn, 'opacity', '1');
          break;
        case 'danger':
          this.buttonColor = danger;
          this.renderer.setStyle(btn, 'cursor', 'pointer');
          this.renderer.setStyle(btn, 'opacity', '1');
          break;
        case 'light':
          this.buttonColor = '255, 255, 255';
          this.renderer.setStyle(btn, 'cursor', 'pointer');
          this.renderer.setStyle(btn, 'opacity', '1');
          break;
        default:
          this.buttonColor = '0, 0, 0';
          this.renderer.setStyle(btn, 'cursor', 'pointer');
          this.renderer.setStyle(btn, 'opacity', '1');
          break;
      }
    } else {
      // Set Default color for isDisabled buttons
      this.buttonColor = '61, 61, 61';
      this.buttonFocusColor = '0, 0, 0';
      this.renderer.setStyle(btn, 'cursor', 'default');
      this.renderer.setStyle(btn, 'opacity', '.5');
    }
  }

  protected setButtonSize(size: buttonSize, btn: HTMLElement) {
    switch (size) {
      case 'xl':
        this.renderer.setStyle(btn, 'width', '14rem');
        this.renderer.setStyle(btn, 'height', '3rem');
        break;
      case 'l':
        // return this.renderer.setStyle(el, 'font-size', '1.5rem');
        return this.renderer.setStyle(btn, 'width', '9rem');
      case 'md':
        // return this.renderer.setStyle(el, 'font-size', '1.3rem');
        return this.renderer.setStyle(btn, 'width', '6rem');
      case 'sm':
        // return this.renderer.setStyle(el, 'font-size', '.9rem');
        return this.renderer.setStyle(btn, 'width', '3.5rem');
      case 'xs':
        // return this.renderer.setStyle(el, 'font-size', '.7rem');
        return this.renderer.setStyle(btn, 'width', '1rem');
    }
  }

}

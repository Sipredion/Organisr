import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import { buttonSize, themeType } from '@organisr/data';

@Directive({
  selector: '[organisrRoundButton]'
})
export class RoundButtonDirective implements OnInit, OnChanges {

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
    this.renderer.setStyle(btn, 'border-radius', '50%');
    this.renderer.setStyle(btn, 'padding', '.3rem');
    this.renderer.setStyle(btn, 'box-shadow', '0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1)')
    this.renderer.setStyle(btn, 'transition', 'all .3s ease');
    this.renderer.setStyle(btn, 'cursor', 'pointer');
    this.renderer.setStyle(btn, 'display', 'flex');
    this.renderer.setStyle(btn, 'justifyContent', 'center');
    this.renderer.setStyle(btn, 'alignItems', 'center');
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
    this.renderer.setStyle(btn, 'border', 'none');
    this.renderer.setStyle(btn, 'backgroundColor', 'transparent');
  }

  protected setButtonColor(color: string, disabled: boolean, btn: HTMLElement) {
    const {primary, accent, danger} = this.uiService.applicationTheme;
    if (!disabled) {
      switch (color) {
        case 'primary':
          this.buttonColor = primary;
          // this.buttonFocusColor = '72, 135, 0';
          this.renderer.setStyle(btn, 'cursor', 'pointer');
          this.renderer.setStyle(btn, 'opacity', '1');
          break;
        case 'accent':
          this.buttonColor = accent;
          // this.buttonFocusColor = '4, 63, 94';
          this.renderer.setStyle(btn, 'cursor', 'pointer');
          this.renderer.setStyle(btn, 'opacity', '1');
          break;
        case 'danger':
          this.buttonColor = danger;
          // this.buttonFocusColor = '148, 33,  0';
          this.renderer.setStyle(btn, 'cursor', 'pointer');
          this.renderer.setStyle(btn, 'opacity', '1');
          break;
        case 'light':
          this.buttonColor = '255, 255, 255';
          this.buttonFocusColor = '200, 200, 200';
          this.renderer.setStyle(btn, 'cursor', 'pointer');
          this.renderer.setStyle(btn, 'opacity', '1');
          break;
        default:
          this.buttonColor = '0, 0, 0';
          this.buttonFocusColor = '0, 0, 0';
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
        this.renderer.setStyle(btn, 'width', '9rem');
        this.renderer.setStyle(btn, 'height', '9rem');
        break;
      case 'l':
        // return this.renderer.setStyle(el, 'font-size', '1.5rem');
        this.renderer.setStyle(btn, 'width', '6rem');
        this.renderer.setStyle(btn, 'height', '6rem');
        break;
      case 'md':
        // return this.renderer.setStyle(el, 'font-size', '1.3rem');
        this.renderer.setStyle(btn, 'width', '2.75rem');
        this.renderer.setStyle(btn, 'height', '2.75rem');
        break;
      case 'sm':
        // return this.renderer.setStyle(el, 'font-size', '.9rem');
        this.renderer.setStyle(btn, 'width', '1.75rem');
        this.renderer.setStyle(btn, 'height', '1.75rem');
        break;
      case 'xs':
        // return this.renderer.setStyle(el, 'font-size', '.7rem');
        this.renderer.setStyle(btn, 'width', '1rem');
        this.renderer.setStyle(btn, 'height', '1rem');
        break;
      default:
        this.renderer.setStyle(btn, 'width', '2.5rem');
        this.renderer.setStyle(btn, 'height', '2.5rem');
    }
  }

}

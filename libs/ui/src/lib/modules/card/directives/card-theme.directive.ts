import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { CardService } from '../services/card.service';
import { themeType } from '@organisr/data';
import { UiService } from '../../../services/ui.service';

@Directive({
  selector: '[organisrCardTheme]'
})
export class CardThemeDirective implements OnInit, OnChanges {

  color: themeType;

  constructor(private crd: ElementRef,
              private renderer: Renderer2,
              private uiService: UiService,
              private cardService: CardService) {
  }

  ngOnInit() {
    this.color = this.cardService.cardColor;
    if (this.color) {
      this.setCardColor(this.color, this.crd.nativeElement);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  setCardColor(color: themeType, crd: HTMLElement) {
    const {primary, accent, danger} = this.uiService.applicationTheme;
    switch (color) {
      case 'primary':
        this.renderer.setStyle(crd, 'borderColor', `rgba(${primary}, 0.7)`);
        this.renderer.setStyle(crd, 'boxShadow', `0 2px 3px rgba(${primary}, 0.3), 0 0 0 1px rgba(${primary}, 0.3)`);
        break;
      case 'accent':
        this.renderer.setStyle(crd, 'borderColor', `rgba(${accent}, 0.7)`);
        this.renderer.setStyle(crd, 'boxShadow', `0 2px 3px rgba(${accent}, 0.3), 0 0 0 1px rgba(${accent}, 0.3)`);
        break;
      case 'danger':
        this.renderer.setStyle(crd, 'borderColor', `rgba(${danger}, 0.7)`);
        this.renderer.setStyle(crd, 'boxShadow', `0 2px 3px rgba(${danger}, 0.3), 0 0 0 1px rgba(${danger}, 0.3)`);
        break;
    }
  }

}

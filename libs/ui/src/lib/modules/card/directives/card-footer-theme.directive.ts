import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import { CardService } from '../services/card.service';

@Directive({
  selector: '[organisrCardFooterTheme]'
})
export class CardFooterThemeDirective implements OnInit {

  constructor(private crd: ElementRef,
              private renderer: Renderer2,
              private uiService: UiService,
              private cardService: CardService) { }

  ngOnInit() {
    const color = this.cardService.cardColor;
    const crd = this.crd.nativeElement;
    if (color) {
      this.renderer.setStyle(crd, 'borderTop', `1px solid rgba(${this.uiService.applicationTheme[color]}, 0.4)`);
    } else {
      this.renderer.setStyle(crd, 'borderTop', `1px solid rgba(0, 0, 0, 0.2)`);
    }
  }

}

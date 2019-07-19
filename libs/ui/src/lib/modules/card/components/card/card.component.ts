import { Component, Input, OnInit } from '@angular/core';
import { themeType } from '@organisr/data';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'organisr-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService]
})
export class CardComponent implements OnInit {

  @Input() color?: themeType;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.cardService.cardColor = this.color;
  }

}

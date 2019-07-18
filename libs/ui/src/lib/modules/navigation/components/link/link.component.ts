import { Component, Input, OnInit } from '@angular/core';
import { OrganisrLink } from '@organisr/data';

@Component({
  selector: 'organisr-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input() link: OrganisrLink;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { OrganisrLink } from '@organisr/data';

@Component({
  selector: 'organisr-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() links: Array<OrganisrLink>;

  constructor() {
  }

  ngOnInit() {
  }

}

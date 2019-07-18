import { Component } from '@angular/core';
import { OrganisrLink } from '@organisr/data';
import {links} from './models/application-links.json';

@Component({
  selector: 'organisr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: Array<OrganisrLink> = links;
}

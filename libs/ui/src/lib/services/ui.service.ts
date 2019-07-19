import { Inject } from '@angular/core';
import { UiTheme } from '@organisr/data';

export class UiService {

  applicationTheme: UiTheme;

  constructor(@Inject('theme')
              private theme: UiTheme) {
    this.applicationTheme = theme;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { CardThemeDirective } from './directives/card-theme.directive';
import { CardHeaderThemeDirective } from './directives/card-header-theme.directive';
import { CardFooterThemeDirective } from './directives/card-footer-theme.directive';

@NgModule({
  declarations: [
    CardComponent,
    CardBodyComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardThemeDirective,
    CardHeaderThemeDirective,
    CardFooterThemeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardBodyComponent,
    CardHeaderComponent,
    CardFooterComponent
  ],
})
export class CardModule { }

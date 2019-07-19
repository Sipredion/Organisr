import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { ButtonModule } from './modules/button/button.module';
import { ModalModule } from './modules/modal/modal.module';
import { CardModule } from './modules/card/card.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { OrganisrFormsModule } from './modules/organisr-forms/organisr-forms.module';
import { UiService } from './services/ui.service';
import { UiTheme } from '@organisr/data';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ButtonModule,
    ModalModule,
    CardModule,
    NavigationModule,
    OrganisrFormsModule
  ],
  providers: [UiService]
})
export class UiModule {
  static forRoot(uiTheme: UiTheme): ModuleWithProviders {
    return {
      ngModule: UiModule,
      providers: [UiService, {provide: 'theme', useValue: uiTheme}]
    }
  }
}

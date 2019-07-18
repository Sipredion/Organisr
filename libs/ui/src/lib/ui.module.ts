import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { ButtonModule } from './modules/button/button.module';
import { ModalModule } from './modules/modal/modal.module';
import { CardModule } from './modules/card/card.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { OrganisrFormsModule } from './modules/organisr-forms/organisr-forms.module';

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
  ]
})
export class UiModule {}

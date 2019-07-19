import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './directives/button.directive';
import { RoundButtonDirective } from './directives/round-button.directive';

@NgModule({
  declarations: [
    ButtonDirective,
    RoundButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonDirective,
    RoundButtonDirective
  ]
})
export class ButtonModule { }

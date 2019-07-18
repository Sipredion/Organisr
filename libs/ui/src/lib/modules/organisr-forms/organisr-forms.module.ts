import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    InputTextComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    InputTextComponent
  ]
})
export class OrganisrFormsModule { }

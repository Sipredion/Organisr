import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';
import { DialogFooterComponent } from './components/dialog-footer/dialog-footer.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    DialogHeaderComponent,
    DialogBodyComponent,
    DialogFooterComponent,
    DialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DialogHeaderComponent,
    DialogBodyComponent,
    DialogFooterComponent,
    DialogComponent
  ]
})
export class ModalModule { }

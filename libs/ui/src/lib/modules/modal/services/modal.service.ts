import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ModalModule } from '@organisr/ui';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  dialogRef: MatDialogRef<any>;

  constructor(private dialog: MatDialog) {
  }

  public openModal(content: TemplateRef<any>) {
    this.dialogRef = this.dialog.open(content);
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}

import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { ActionButtonComponent } from '../../../../shared/action-button/action-button.component';
import { OdontogramComponent } from '../odontogram/odontogram.component';


@Component({
  selector: 'app-patient-dialog',
  standalone: true,
  imports: [ActionButtonComponent, OdontogramComponent],
  templateUrl: './patient-dialog.component.html',
})
export class PatientDialogComponent {
  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any
  ) {
    this.data = data;
  }

  close() {
    this.dialogRef.close();
  }

  addNewOdontogram() {
    this.data.patient
  }
}

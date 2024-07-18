import { Component, Input } from '@angular/core';
import { PatientsService } from '../../../../services/patients.service';
import { Patient } from '../../../../models/patient.model';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { PatientDialogComponent } from '../patient-dialog/patient-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})
export class PatientComponent {
  @Input() patient: Patient = {
    name: '',
    lastName: '',
    tel: 0,
    email: '',
    birthDate: '',
    gender: '',
    socialSecurity: '',
  };

  constructor(
    private patientsService: PatientsService,
    public dialog: Dialog,
    private router: Router
  ) {}

  openDialog() {
    this.dialog.open(PatientDialogComponent, {
      width: '768px',
      maxHeight: '825px',
      data: {
        patient: this.patient,
      },
    });
  }

  navigateToPatient(name: string) {
    this.router.navigate(['patients/', name]);
  }
}

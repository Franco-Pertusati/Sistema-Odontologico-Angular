import { Component, Input } from '@angular/core';
import { PatientComponent } from './components/patient/patient.component';
import { CreatePatientsComponent } from './components/create-patients/create-patients.component';
import { Patient } from '../../models/patient.model';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [PatientComponent, CreatePatientsComponent],
  templateUrl: './patients.component.html',
})
export class PatientsComponent {
  patients: Patient[] = [];

  constructor(private patientsService: PatientsService) {}

  ngOnInit() {
    this.patients = this.patientsService.getPatients();
  }
}

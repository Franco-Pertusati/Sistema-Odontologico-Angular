import { Component } from '@angular/core';
import { PatientsService } from '../../../../services/patients.service';
import { Patient } from '../../../../models/patient.model';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent {
  patients: Patient[] = [];

  constructor(private patientsService: PatientsService) {}

  ngOnInit() {
    this.patients = this.patientsService.getPatients();
  }
}

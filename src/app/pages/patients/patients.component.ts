import { Component } from '@angular/core';
import { PatientComponent } from './components/patient/patient.component';
import { CreatePatientsComponent } from "./components/create-patients/create-patients.component";

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [PatientComponent, CreatePatientsComponent],
  templateUrl: './patients.component.html',
})
export class PatientsComponent {

}

import { Routes } from '@angular/router';
import { PatientsComponent } from './pages/patients/patients.component';
import { OdontogramComponent } from './pages/patients/components/odontogram/odontogram.component';

export const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,
  },
  {
    path: 'odontogram',
    component: OdontogramComponent,
  },
];

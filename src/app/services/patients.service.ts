import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor() {}

  patients: Patient[] = [
    {
      name: 'María',
      lastName: 'González',
      tel: 123456789,
      email: 'maria.gonzalez@example.com',
      birthDate: '1990-05-15',
      gender: 'F',
      socialSecurity: 'IOMA',
    },
    {
      name: 'Juan',
      lastName: 'Pérez',
      tel: 987654321,
      email: 'juan.perez@example.com',
      birthDate: '1985-10-20',
      gender: 'M',
      socialSecurity: 'OSDE',
    },
    {
      name: 'Luisa',
      lastName: 'Martínez',
      tel: 555123456,
      email: 'luisa.martinez@example.com',
      birthDate: '1982-03-25',
      gender: 'F',
      socialSecurity: 'IOMA',
    },
    {
      name: 'Pedro',
      lastName: 'Sánchez',
      tel: 333987654,
      email: 'pedro.sanchez@example.com',
      birthDate: '1978-12-10',
      gender: 'M',
      socialSecurity: 'Ninguno',
    },
    {
      name: 'Ana',
      lastName: 'López',
      tel: 777555444,
      email: 'ana.lopez@example.com',
      birthDate: '1995-08-03',
      gender: 'F',
      socialSecurity: 'IOMA',
    },
    {
      name: 'Javier',
      lastName: 'García',
      tel: 111222333,
      email: 'javier.garcia@example.com',
      birthDate: '1987-06-20',
      gender: 'M',
      socialSecurity: 'Ninguno',
    },
    {
      name: 'Sofía',
      lastName: 'Díaz',
      tel: 999888777,
      email: 'sofia.diaz@example.com',
      birthDate: '1993-04-12',
      gender: 'F',
      socialSecurity: 'OSDE',
    },
  ];

  getPatients() {
    return this.patients;
  }
}

import { Component } from '@angular/core';
import { OdontogramService } from '../../../../services/odontogram.service';
import { Odontogram } from '../../../../models/patient.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-odontogram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './odontogram.component.html',
  styleUrl: './odontogram.component.scss'
})
export class OdontogramComponent {
  constructor(private odontogramService: OdontogramService) {}

  odontogram:Odontogram = {
    quadrants: [
      {
        name: 'Quadrant 1',
        theet: Array.from({ length: 8 }, (_, index) => ({
          tooth: {
            name: index + 11,
            comment: '',
            divisions: [
              { name: 'Oclusal', state: 'Saludable' },
              { name: 'Vestibular', state: 'Saludable' },
              { name: 'Mesial', state: 'Saludable' },
              { name: 'Distal', state: 'Saludable' },
              { name: 'Platino', state: 'Saludable' },
            ],
          },
        })),
      },
      {
        name: 'Quadrant 2',
        theet: Array.from({ length: 8 }, (_, index) => ({
          tooth: {
            name: index + 21,
            comment: '',
            divisions: [
              { name: 'Oclusal', state: 'Saludable' },
              { name: 'Vestibular', state: 'Saludable' },
              { name: 'Mesial', state: 'Saludable' },
              { name: 'Distal', state: 'Saludable' },
              { name: 'Platino', state: 'Saludable' },
            ],
          },
        })),
      },
      {
        name: 'Quadrant 3',
        theet: Array.from({ length: 8 }, (_, index) => ({
          tooth: {
            name: index + 31,
            comment: '',
            divisions: [
              { name: 'Oclusal', state: 'Saludable' },
              { name: 'Vestibular', state: 'Saludable' },
              { name: 'Mesial', state: 'Saludable' },
              { name: 'Distal', state: 'Saludable' },
              { name: 'Platino', state: 'Saludable' },
            ],
          },
        })),
      },
      {
        name: 'Quadrant 4',
        theet: Array.from({ length: 8 }, (_, index) => ({
          tooth: {
            name: index + 41,
            comment: '',
            divisions: [
              { name: 'Oclusal', state: 'Saludable' },
              { name: 'Vestibular', state: 'Saludable' },
              { name: 'Mesial', state: 'Saludable' },
              { name: 'Distal', state: 'Saludable' },
              { name: 'Platino', state: 'Saludable' },
            ],
          },
        })),
      },
    ],
  };
}

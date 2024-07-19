export interface Patient {
  name: string;
  lastName: string;
  tel: number;
  email: string;
  birthDate: string;
  gender: string;
  dni: number;
  socialSecurity: string;
  odontogram?: Odontogram;
}

interface Tooth {
  name: number;
  comment: string;
  divisions: [
    {
      name: 'Oclusal';
      state: 'Carie' | 'Saludable';
    },
    {
      name: 'Vestibular';
      state: 'Carie' | 'Saludable';
    },
    {
      name: 'Mesial';
      state: 'Carie' | 'Saludable';
    },
    {
      name: 'Distal';
      state: 'Carie' | 'Saludable';
    },
    {
      name: 'Platino';
      state: 'Carie' | 'Saludable';
    },
  ];
}

interface Quadrant {
  name: string;
  theet: { tooth: Tooth }[];
}

export interface Odontogram {
  quadrants: Quadrant[];
}

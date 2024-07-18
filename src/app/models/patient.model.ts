export interface Patient {
  name: string;
  lastName: string;
  tel: number;
  email: string;
  birthDate: string;
  gender: string;
  socialSecurity: string;
  odontogram?: Odontogram;
}

export interface Odontogram {
  quadrants: [
    {
      name: string;
      theet: [
        {
          tooth: {
            name: number;
            comment: string;
            divisions: [
              {
                name:
                  | 'occlusal'
                  | 'vestibular'
                  | 'mesial'
                  | 'distal'
                  | 'palatine';
                state:
                  | 'cavities'
                  | 'restoration'
                  | 'Waiting for extraction'
                  | 'absent'
                  | 'healthy';
              }
            ];
          };
        }
      ];
    }
  ];
}

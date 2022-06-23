export interface IDonor {
  id: number;
  firstName: 'string';
  middleName: 'string';
  lastName: 'string';
  finalName: 'string';
  email: 'string';
  phone: 'string';
  committeeType: 'string';
  street1: 'string';
  street2: 'string';
  city: 'string';
  state: string;
  stateID: number;
  zip: string;
  lastDateOfDonation: Date;
  occupation: string;
  recipient: string;
  party: string;
  isIndividual: number;
  voterID?: number;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Donations')
export class Donation {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column({ nullable: true })
  donorID: number;
  @Column({ nullable: true })
  firstName: string;
  @Column({ nullable: true })
  middleName: string;
  @Column({ nullable: true })
  lastName: string;
  @Column({ nullable: true })
  'tres/cont-prefix': string;
  @Column({ nullable: true })
  'tres/cont-suffix': string;
  @Column({ nullable: true })
  email: string;
  @Column({ nullable: true })
  committeeType: string;
  @Column({ nullable: true })
  street1: string;
  @Column({ nullable: true })
  street: string;
  @Column({ nullable: true })
  city: string;
  @Column({ nullable: true })
  state: string;
  @Column({ nullable: true })
  zip: string;
  @Column({ nullable: true })
  date: string;
  @Column({ nullable: true })
  amount: string;
  @Column({ nullable: true })
  occupation: string;
  @Column({ nullable: true })
  employerName: string;
  @Column({ nullable: true })
  employerStreet1: string;
  @Column({ nullable: true })
  employerStreet2: string;
  @Column({ nullable: true })
  employerCity: string;
  @Column({ nullable: true })
  employerSt: string;
  @Column({ nullable: true })
  employerZi: string;
  @Column({ nullable: true })
  IntermediaryDonation: string;
  @Column({ nullable: true })
  IntermediaryName: string;
  @Column({ nullable: true })
  IntermediaryStreet1: string;
  @Column({ nullable: true })
  IntermediaryStreet2: string;
  @Column({ nullable: true })
  IntermediarySity: string;
  @Column({ nullable: true })
  IntermediaryState: string;
  @Column({ nullable: true })
  IntermediaryZip: string;
  @Column({ nullable: true })
  IntermediaryEmail: string;
  @Column({ nullable: true })
  activeStat: string;
  @Column({ nullable: true })
  committeeI: string;
  @Column({ nullable: true })
  orgType: string;
  @Column({ nullable: true })
  party: string;
  @Column({ nullable: true })
  recordType: string;
  @Column({ nullable: true })
  recipient: string;
  @Column({ nullable: true })
  cycle: string;
  @Column({ nullable: true })
  nameMixed: string;
  @Column({ nullable: true })
  isIndividual: string;
}

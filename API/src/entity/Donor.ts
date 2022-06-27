import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Notes } from './Note';
import { Donations } from './Donation';

@Entity('Donors')
export class Donors {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column({ nullable: true })
  firstName: string;
  @Column({ nullable: true })
  middleName: string;
  @Column({ nullable: true })
  lastName: string;
  @Column({ nullable: true })
  finalName: string;
  @Column({ nullable: true })
  email: string;
  @Column({ nullable: true })
  phone: string;
  @Column({ nullable: true })
  street1: string;
  @Column({ nullable: true })
  street2: string;
  @Column({ nullable: true })
  city: string;
  @Column({ nullable: true })
  state: string;
  @Column({ nullable: true })
  stateID: number;
  @Column({ nullable: true })
  zip: string;
  @Column({ nullable: true })
  occupation: string;
  @Column({ nullable: true })
  isIndividual: number;
  @OneToMany(() => Notes, (notes) => notes.donor)
  note: Notes[];
  @OneToMany(() => Donations, (donations) => donations.donor)
  donation: Donations[];
}

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Donors } from './Donor';

@Entity('Notes')
export class Notes {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  text: string;
  @Column()
  createdBy: string;
  @CreateDateColumn()
  createdOn: Date;
  @Column()
  updatedBy: string;
  @ManyToOne(() => Donors, (donors) => donors.note, { onDelete: 'CASCADE' })
  donor: number;
}

import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  FirstName: string;
  @Column()
  LastName: string;
  @Column()
  Email: string;
  @Column()
  Phone: string;
  @Column()
  UserName: string;
  @Column({ type: 'varbinary' })
  PasswordSalt: string;
  @Column({ type: 'varbinary' })
  PasswordHash: string;
  @Column()
  DateOfBirth: Date;
  @Column()
  CreatedOn: Date;
  @Column({ type: 'timestamp' })
  LastActive: Date;
  @Column()
  Gender: string;
  @Column()
  IsMasterAdmin: boolean;
  @Column()
  IsValidated: boolean;
  @Column()
  IsPortalUser: boolean;
}

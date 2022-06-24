import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Voters {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  FirstName: string;
  @Column({ nullable: true })
  MiddleName: string;
  @Column({ nullable: true })
  LastName: string;
  @Column({ nullable: true })
  //public string FinalName { get; set; }
  Email: string;
  @Column({ nullable: true })
  Phone: string;
  @Column({ nullable: true })
  DateOfBirth?: Date;
  @Column({ nullable: true })
  Gender: string;
  @Column({ nullable: true })
  Address: string;
  @Column({ nullable: true })
  City: string;
  @Column({ nullable: true })
  CountyName: string;
  @Column({ nullable: true })
  CountyID?: number;
  @Column({ nullable: true })
  StateCode?: number;
  @Column({ nullable: true })
  StateFIPS?: number;
  @Column({ nullable: true })
  ZIPCode?: number;
  @Column({ nullable: true })
  ZIPCodeFour?: number;
  @Column({ nullable: true })
  MailingAddress: string;
  @Column({ nullable: true })
  PoliticalPartyCode: string;
  @Column({ nullable: true })
  ElectionDistrict?: number;
  @Column({ nullable: true })
  LegislativeDistrict?: number;
  @Column({ nullable: true })
  TownCity: string;
  @Column({ nullable: true })
  Ward: string;
  @Column({ nullable: true })
  CongressionalDistrict?: number;
  @Column({ nullable: true })
  SenateDistrict?: number;
  @Column({ nullable: true })
  AssemblyDistrict?: number;
  @Column({ nullable: true })
  DateTime?: Date;
  @Column({ nullable: true })
  LastYearVoted?: number;
  @Column({ nullable: true })
  PreviousCountyID?: number;
  @Column({ nullable: true })
  PreviousAddress: string;
  @Column({ nullable: true })
  PreviousName: string;
  @Column({ nullable: true })
  CountyVRNumber: string;
  @Column({ nullable: true })
  StatusCode: string;
  @Column({ nullable: true })
  VoterID: string;
  @Column({ nullable: true })
  VoterHistory: string;
}

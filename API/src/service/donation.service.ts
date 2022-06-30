import { createQueryBuilder, QueryBuilder, DataSource } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Donations } from '../entity/Donation';

export class DonationService {
  donationRepo: any;
  constructor() {
    this.donationRepo = AppDataSource.getRepository(Donations);
  }
  public getDonations = async () => {
    const donations = await AppDataSource.getRepository(Donations)
      .createQueryBuilder()
      .limit(100);

    return donations;
  };
  public getDonationsByDonor = async (donorId: string) => {
    console.log(donorId);
    const donations = await this.donationRepo
      .createQueryBuilder('d')
      .select([
        'd.date',
        'd.amount',
        'd.party',
        'd.recipient',
        'd.street1',
        'd.city',
        'd.state',
        'd.zip',
        'd.occupation',
      ])
      .leftJoin('d.donor', 'donor')
      .where(`donor.ID = :dId`, { dId: donorId })
      .getMany();
    return donations;
  };
  public getCustomSearch = async (customSearch: string[], rows: number) => {
    const result = await this.donationRepo
      .createQueryBuilder('donations')
      .select(customSearch)
      .take(rows)
      .getMany();
    return result;
  };
}

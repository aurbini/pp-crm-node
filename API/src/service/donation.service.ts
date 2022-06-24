import { createQueryBuilder, QueryBuilder, DataSource } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Donation } from '../entity/Donation';

export class DonationService {
  donationRepo: any;
  constructor() {
    this.donationRepo = AppDataSource.getRepository(Donation);
  }
  public getDonations = async () => {
    const donations = await AppDataSource.getRepository(Donation)
      .createQueryBuilder()
      .limit(100);

    return donations;
  };
}

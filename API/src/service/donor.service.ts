import { Donors } from '../entity/Donor';
import { AppDataSource } from '../data-source';
import { createQueryBuilder } from 'typeorm';

export class DonorService {
  // private donorRepository: DonorRepository;

  donorRepo: any;

  constructor() {
    this.donorRepo = AppDataSource.getRepository(Donors);
  }
  public getDonors = async () => {
    const donors = await this.donorRepo.find({
      take: 2000,
    });
    return donors;
  };
  public getDonorById = async (donorID: number) => {
    const donor = await this.donorRepo.findOneBy({
      ID: donorID,
    });
    return donor;
  };
  public getDonorsByPage = async (page: number) => {
    const donor = await this.donorRepo.find({
      skip: 2000 * (page - 1),
      take: 2000,
    });
    return donor;
  };
  public editDonor = async (donorID: number, body: any) => {
    const donor = await this.donorRepo.findOneBy({
      id: donorID,
    });
    this.donorRepo.merge(donor, body);
    const results = await this.donorRepo.save(donor);
    return results;
  };
  public removeDonor = async (donorID: string) => {
    const result = await this.donorRepo.delete(donorID);
  };
  public getCustomSearch = async (customSearch: string[]) => {
    const result = await this.donorRepo
      .createQueryBuilder('donor')
      .select(customSearch)
      .take(1000)
      .getMany();
    return result;
  };
}

import { Voters } from '../entity/Voter';
import { AppDataSource } from '../data-source';

export class VoterService {
  voterRepo: any;
  constructor() {
    this.voterRepo = AppDataSource.getRepository(Voters);
  }
  getVoters() {
    const voters = this.voterRepo.find({
      take: 5000,
    });
    return voters;
  }
}

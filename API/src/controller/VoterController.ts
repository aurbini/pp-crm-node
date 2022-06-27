import { VoterService } from '../service/voter.service';
import { Request, Response } from 'express';
export class VoterController {
  voterService: VoterService;
  constructor() {
    this.voterService = new VoterService();
  }
  public getVoters = async (req: Request, res: Response) => {
    const voters = await this.voterService.getVoters();
    res.send(voters).json;
  };
}

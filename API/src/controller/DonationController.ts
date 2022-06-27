import { Request, Response } from 'express';
import { DonationService } from '../service/donation.service';

export class DonationController {
  donationService: DonationService;

  constructor() {
    this.donationService = new DonationService();
  }
  public getDonations = async (req: Request, res: Response) => {
    const donations = await this.donationService.getDonations();

    res.send(donations);
  };
  public getDonationsByDonorID = async (req: Request, res: Response) => {
    const donations = await this.donationService.getDonationsByDonor(
      req.params.id
    );

    res.send(donations);
  };
}

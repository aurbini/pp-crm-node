import { Request, Response } from 'express';
import { DonorService } from '../service/donor.service';

export class DonorController {
  donorService: DonorService;

  constructor() {
    this.donorService = new DonorService();
  }
  public getDonors = async (req: Request, res: Response) => {
    console.log('get');
    const donors = await this.donorService.getDonors();
    res.send(donors).json;
  };
  public getDonorByID = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const donor = await this.donorService.getDonorById(id);
    res.send(donor);
  };
  public editDonor = async (req: Request, res: Response) => {
    // console.log('body' + req.body);
    // console.log('params' + req.params.id);
    const id = parseInt(req.params.id);
    const body = req.body;
    const updatedDonor = await this.donorService.editDonor(id, body);
    res.send(updatedDonor);
  };
  public addDonor = async (req: Request, res: Response) => {
    console.log('Post');
    res.json({ message: 'added Donor' });
  };
  public deleteDonorByID = async (req: Request, res: Response) => {
    const deletedDonor = await this.donorService.removeDonor(req.params.id);
    res.send({ message: 'deleted Donor' });
  };
}

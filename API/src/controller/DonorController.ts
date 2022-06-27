import { NextFunction, Request, Response } from 'express';
import { DonorService } from '../service/donor.service';
const exportUsersToExcel = require('../service/exportService');
const fs = require('fs');

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
    const ID = parseInt(req.params.id);
    const donor = await this.donorService.getDonorById(ID);
    console.log(donor);
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
  public getCustomSearch = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const searchArr = req.body.checkArray;
    const tranformSearch = [];
    for (let i = 0; i < searchArr.length; i++) {
      const element = searchArr[i];
      tranformSearch.push(`donor.${element}`);
    }
    try {
      const donors = await this.donorService.getCustomSearch(tranformSearch);
      const workSheetColumnNames = [];
      const filePath = './src/dataFiles/excel.xlsx';
      const workSheetName = 'customSearch';
      for (const key in donors[0]) {
        workSheetColumnNames.push(key);
      }
      await exportUsersToExcel(
        donors,
        workSheetColumnNames,
        workSheetName,
        filePath
      );

      res.json({ message: 'sucess file created' });
    } catch (err) {
      res.json({ error: err });
    }
  };
  sendCustomSearchFile = async (req: Request, res: Response) => {
    res.download('./src/dataFiles/excel.xlsx', () => {
      fs.unlink('./src/dataFiles/excel.xlsx', function () {
        console.log('file aws deleted');
      });
    });
  };
}

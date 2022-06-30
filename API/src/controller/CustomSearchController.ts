import { transcode } from 'buffer';
import { Response, Request } from 'express';
import { DonationService } from '../service/donation.service';
import { DonorService } from '../service/donor.service';
import { VoterService } from '../service/voter.service';
const exportUsersToExcel = require('../service/exportService');
const fs = require('fs');

export class CustomSearchController {
  donorService: DonorService;
  donationService: DonationService;
  voterService: VoterService;
  constructor() {
    this.donorService = new DonorService();
    this.donationService = new DonationService();
    this.voterService = new VoterService();
  }
  public getDynamicSearchData = async (req: Request, res: Response) => {
    const searchType = req.params.searchType;
    const searchArr = req.body.checkArray;
    const tranformSearch = [];

    for (let i = 0; i < searchArr.length; i++) {
      const element = searchArr[i];
      tranformSearch.push(`${searchType}.${element}`);
    }
    try {
      let data: any;
      console.log(tranformSearch);
      if (searchType == 'donor')
        data = await this.donorService.getCustomSearch(tranformSearch);
      else if (searchType == 'voter')
        data = await this.voterService.getCustomSearch(tranformSearch);
      else data = await this.donationService.getCustomSearch(tranformSearch);

      const workSheetColumnNames = [];
      const filePath = './src/dataFiles/excel.xlsx';
      const workSheetName = 'customSearch';
      for (const key in data[0]) {
        workSheetColumnNames.push(key);
      }
      await exportUsersToExcel(
        data,
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
    console.log('object');
    res.download('./src/dataFiles/excel.xlsx', () => {
      fs.unlink('./src/dataFiles/excel.xlsx', function () {
        console.log('file aws deleted');
      });
    });
  };
}

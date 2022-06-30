import { transcode } from 'buffer';
import { Response, Request } from 'express';
import { DonationService } from '../service/donation.service';
import { DonorService } from '../service/donor.service';
import { VoterService } from '../service/voter.service';
const exportUsersToExcel = require('../service/exportService');
const fs = require('fs');
import * as XLSX from 'xlsx';
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
    const rows = +req.body.rows;
    const searchArr = req.body.checkArray;
    const tranformSearch = [];
    console.log(searchArr);
    console.log('tranformSearch' + tranformSearch);

    for (let i = 0; i < searchArr.length; i++) {
      const element = searchArr[i];
      tranformSearch.push(`${searchType}.${element}`);
    }
    try {
      let data: any;
      if (searchType == 'donor')
        data = await this.donorService.getCustomSearch(tranformSearch, rows);
      else if (searchType == 'voter')
        data = await this.voterService.getCustomSearch(tranformSearch, rows);
      else
        data = await this.donationService.getCustomSearch(tranformSearch, rows);

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

  downloadReport = async (req: Request, res: Response) => {
    const searchType = req.params.searchType;
    const rows = +req.params.rows;

    const tranformSearch = [];
    // console.log('parrams ' + req.query);
    for (const key in req.query) {
      const element = req.query[key];
      tranformSearch.push(`${searchType}.${element}`);
    }
    console.log(tranformSearch);
    console.log(searchType);
    try {
      let data: any;
      if (searchType == 'donor')
        data = await this.donorService.getCustomSearch(tranformSearch, rows);
      else if (searchType == 'voter')
        data = await this.voterService.getCustomSearch(tranformSearch, rows);
      else
        data = await this.donationService.getCustomSearch(tranformSearch, rows);
      console.log('data is ' + data[0]);

      console.log(data);
      // const workSheetColumnNames = [];
      // const filePath = './src/dataFiles/excel.xlsx';
      // const workSheetName = 'customSearch';
      // for (const key in data[0]) {
      //   workSheetColumnNames.push(key);
      // }
      // await exportUsersToExcel(
      //   data,
      //   workSheetColumnNames,
      //   workSheetName,
      //   filePath
      // );
      const wb = XLSX.utils.book_new(); // create workbook
      const ws = XLSX.utils.json_to_sheet(data); // convert data to sheet
      XLSX.utils.book_append_sheet(wb, ws, 'custom_report'); // add sheet to workbook

      const filename = 'customReport.xlsx';
      const wb_opts = { bookType: "'xlsx'", type: "'binary'" }; // workbook options
      XLSX.writeFile(wb, filename); // write workbook file

      const stream = fs.createReadStream(filename); // create read stream
      stream.pipe(res);
      // res.json({ message: 'sucess file created' });
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

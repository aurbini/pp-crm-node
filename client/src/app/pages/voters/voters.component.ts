import { Component, OnInit, ViewChild } from '@angular/core';
import { VoterService } from '../../services/voter.service';
import { IVoter } from '../../models/voter.model';
import { Table } from 'primeng/table';
import { NgxSpinnerService } from 'ngx-spinner';
import * as xlsx from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.css'],
})
export class VotersComponent implements OnInit {
  public voters!: IVoter[];
  loading = true;
  columns = cols;
  globalFilterValue!: '';
  @ViewChild('vt') vtRef: Table | any;
  constructor(
    private voterSvc: VoterService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getVoters();
  }
  private getVoters() {
    this.spinner.show();
    this.voterSvc.getVoters().subscribe((voters) => {
      console.log(voters);

      this.voters = voters;
      this.loading = false;
      this.spinner.hide();
    });
  }
  applyGlobalFilter($event: Event, stringVal: string) {
    this.vtRef.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }
  exportAsExcel() {
    const worksheet = xlsx.utils.json_to_sheet(this.voters);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = xlsx.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, 'products');
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
  clear(table: Table) {
    table.clear();
  }
}
const cols = [
  { field: 'Address', header: 'Address' },
  { field: 'AssemblyDistrict', header: 'AssemblyDistrict' },
  { field: 'City', header: 'City' },
  { field: 'CongressionalDistrict', header: 'CongressionalDistrict' },
  { field: 'CountyID', header: 'CountyID' },
  { field: 'CountyName', header: 'CountyName' },
  { field: 'CountyVRNumber', header: 'CountyVRNumber' },
  { field: 'DateOfBirth', header: 'DateOfBirth' },
  { field: 'DateTime', header: 'DateTime' },
  { field: 'ElectionDistrict', header: 'ElectionDistrict' },
  { field: 'Email', header: 'Email' },
  { field: 'FirstName', header: 'FirstName' },
  { field: 'Gender', header: 'Gender' },
  { field: 'ID', header: 'ID' },
  { field: 'LastNamenie', header: 'LastNamenie' },
  { field: 'LastYearVoted', header: 'LastYearVoted' },
  { field: 'LegislativeDistrict', header: 'LegislativeDistrict' },
  { field: 'MailingAddress', header: 'MailingAddress' },
  { field: 'MiddleName', header: 'MiddleName' },
  { field: 'Phone', header: 'Phone' },
  { field: 'PoliticalPartyCode', header: 'PoliticalPartyCode' },
  { field: 'PreviousAddress', header: 'PreviousAddress' },
  { field: 'PreviousCountyID', header: 'PreviousCountyID' },
  { field: 'PreviousName', header: 'PreviousName' },
  { field: 'SenateDistrict', header: 'SenateDistrict' },
  { field: 'StateCode', header: 'StateCode' },
  { field: 'StateFIPS', header: 'StateFIPS' },
  { field: 'StatusCode', header: 'StatusCode' },
  { field: 'TownCity', header: 'TownCity' },
  { field: 'VoterHistory', header: 'VoterHistory' },
  { field: 'VoterID', header: 'VoterID' },
  { field: 'Ward', header: 'Ward' },
  { field: 'ZIPCode', header: 'ZIPCode' },
  { field: 'ZIPCodeFour', header: 'ZIPCodeFour' },
];

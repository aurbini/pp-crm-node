import { Component, OnInit, ViewChild } from '@angular/core';
import { VoterService } from '../../services/voter.service';
import { IVoter } from '../../models/voter.model';
import { Table } from 'primeng/table';

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
  constructor(private voterSvc: VoterService) {}

  ngOnInit(): void {
    this.getVoters();
  }
  private getVoters() {
    this.voterSvc.getVoters().subscribe((voters) => {
      console.log(voters);

      this.voters = voters;
      this.loading = false;
    });
  }
  applyGlobalFilter($event: Event, stringVal: string) {
    this.vtRef.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
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

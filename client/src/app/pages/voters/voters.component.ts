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
  cols!: any[];
  globalFilterValue!: '';
  @ViewChild('dt') dtRef: Table | any;
  constructor(private voterSvc: VoterService) {}

  ngOnInit(): void {
    // this.getDonors();
  }
  private getDonors() {
    this.voterSvc.getVoters().subscribe((voters) => {
      console.log(voters);

      this.voters = voters;
      this.loading = false;
    });
  }
  applyGlobalFilter($event: Event, stringVal: string) {
    this.dtRef.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }
  clear(table: Table) {
    table.clear();
  }
}

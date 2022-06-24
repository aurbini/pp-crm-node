import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DonorService } from '../../services/donor.service';
import { IDonor } from '../../models/donor.model';
import { Table } from 'primeng/table';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css'],
  providers: [],
})
export class DonorsComponent implements OnInit {
  public donors!: IDonor[];
  loading = true;
  cols!: any[];
  globalFilterValue!: '';
  donorDialog!: boolean;
  donor!: IDonor | any;
  submitted!: boolean;
  selectedDonors!: IDonor[] | null;
  status!: any[];
  cities = [{ name: 'New York' }, { name: 'Albany' }, { name: 'Brooklyn' }];
  @ViewChild('dt') dtRef: Table | any;
  constructor(
    private donorSvc: DonorService,
    private toastrSvc: ToastrService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.submitted = false;
    this.donorDialog = false;
    this.getDonors();
  }
  private getDonors() {
    console.log('hello');
    this.donorSvc.getDonors().subscribe((data) => {
      console.log(data);
      this.donors = data;
      this.loading = false;
      this.cols = [
        { field: 'firstName', header: 'First Name' },
        { field: 'lastName', header: 'Last Name' },
        { field: 'finalName', header: 'Final Name' },
        { field: 'email', header: 'Email' },
        { field: 'phone', header: 'Phone' },
        { field: 'committeeType', header: 'ComitteeType' },
        { field: 'street1', header: 'Street1' },
        { field: 'street2', header: 'Street2' },
        { field: 'city', header: 'City' },
      ];
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

  openNew() {
    this.donor = {};
    this.submitted = false;
    this.donorDialog = true;
  }

  // deleteSelectedDonors() {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete the selected donors?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.donors = this.donors.filter((val) =>
  //         this.selectedDonors!.includes(val)
  //       );
  //       this.selectedDonors = null;
  //       this.toastrSvc.success('Deleted Donor');
  //     },
  //   });
  // }

  editDonor(donor: IDonor) {
    this.donorDialog = true;
  }

  openDeleteDonorDialog(donor: IDonor) {
    console.log('object');
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + donor.firstName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteSelectedDonor(donor.id);
        this.donors = this.donors.filter((val) => val.id !== donor.id);
        this.toastrSvc.success('Donor deleted');
      },
    });
  }
  deleteSelectedDonor(id: number) {
    this.donorSvc.deleteSelectedDonor(id).subscribe((data) => {
      this.toastrSvc.success('Deleted selected donor');
    });
  }

  hideDialog() {
    this.donorDialog = false;
    this.submitted = false;
  }

  saveDonor() {
    this.submitted = true;

    if (this.donor.name.trim()) {
      if (this.donor.id) {
        this.donors[this.findIndexById(this.donor.id)] = this.donor;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'donor Updated',
          life: 3000,
        });
      } else {
        this.donor.id = this.createId();
        this.donor.image = 'donor-placeholder.svg';
        this.donors.push(this.donor);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'donor Created',
          life: 3000,
        });
      }

      this.donors = [...this.donors];
      this.donorDialog = false;
      this.donor = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.donors.length; i++) {
      if (this.donors[i].id.toString() === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}

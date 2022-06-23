import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DonorService } from '../../services/donor.service';
import { IDonor } from '../../models/donor.model';

@Component({
  selector: 'app-donor-detail',
  templateUrl: './donor-detail.component.html',
  styleUrls: ['./donor-detail.component.css'],
})
export class DonorDetailComponent implements OnInit {
  donorID: any;
  donorDetail!: IDonor;
  userContent!: UserContentTypes;
  userContentTypes = UserContentTypes;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private donorSvc: DonorService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        // Do something
        this.donorID = params['id'];
      }
    });
    this.getDonorInfo(this.donorID);
    this.userContent = UserContentTypes.profile;
  }
  async getDonorInfo(donorID: any) {
    this.donorSvc.getDonorByID(donorID).subscribe((donorDetailData) => {
      console.log(donorDetailData);
      this.donorDetail = donorDetailData;
    });
  }
  toggleSidebar(type: UserContentTypes) {
    this.userContent = type;
  }
}
export enum UserContentTypes {
  profile = 'profile',
  notes = 'notes',
  edit = 'edit',
}

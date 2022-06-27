import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDonor } from '../../models/donor.model';
import { IDonation } from '../../models/donation.model';
import { DonationService } from '../../services/donation.service';

@Component({
  selector: 'app-donor-donations',
  templateUrl: './donor-donations.component.html',
  styleUrls: ['./donor-donations.component.css'],
})
export class DonorDonationsComponent implements OnInit {
  @Input() donor: IDonor;
  donations$: Observable<IDonation[]>;
  constructor(private donationSvc: DonationService) {}

  ngOnInit(): void {
    this.getDonationsByID(this.donor.ID);
  }
  getDonationsByID(id: number) {
    this.donations$ = this.donationSvc.getDonationsByID(id);
  }
}

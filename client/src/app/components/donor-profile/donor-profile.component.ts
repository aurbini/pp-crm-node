import { Component, Input, OnInit } from '@angular/core';
import { IDonor } from '../../models/donor.model';

@Component({
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css'],
})
export class DonorProfileComponent implements OnInit {
  @Input() donor!: IDonor;
  constructor() {}

  initDonorFormFields() {}
  ngOnInit(): void {}
}

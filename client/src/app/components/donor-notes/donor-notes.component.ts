import { Component, Input, OnInit } from '@angular/core';
import { IDonor } from '../../models/donor.model';
@Component({
  selector: 'app-donor-notes',
  templateUrl: './donor-notes.component.html',
  styleUrls: ['./donor-notes.component.css'],
})
export class DonorNotesComponent implements OnInit {
  @Input() donor!: IDonor;
  constructor() {}

  ngOnInit(): void {}
}

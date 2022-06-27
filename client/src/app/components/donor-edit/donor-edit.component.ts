import {
  Component,
  Input,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { IDonor } from '../../models/donor.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DonorService } from '../../services/donor.service';

@Component({
  selector: 'app-donor-edit',
  templateUrl: './donor-edit.component.html',
  styleUrls: ['./donor-edit.component.css'],
})
export class DonorEditComponent implements OnInit {
  @Input() donor!: IDonor;
  public donorForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private donorSvc: DonorService
  ) {}
  ngOnInit(): void {
    this.initDonorFormFields();
  }
  initDonorFormFields() {
    this.donorForm = this.formBuilder.group({
      firstName: [this.donor?.firstName],
      middleName: [this.donor?.middleName],
      lastName: [this.donor?.lastName],
      finalName: [this.donor?.finalName],
      email: [this.donor?.email],
      phone: [this.donor?.phone],
      street1: [this.donor?.street1],
      street2: [this.donor?.street2],
      city: [this.donor?.city],
      state: [this.donor?.state],
      stateID: [this.donor?.stateID],
      zip: [this.donor?.zip],
      occupation: [this.donor?.occupation],
      isIndividual: [this.donor?.isIndividual],
    });
    // console.log(this.donorForm.value);
  }
  onDonorFormSubmit() {
    this.donorSvc
      .modifyDonor(this.donor.ID, this.donorForm.value)
      .subscribe((res) => {
        // console.log(res);
      });
  }
  addDonor() {
    this.donorSvc.addDonor('post').subscribe((res) => {
      console.log(res);
    });
  }
}

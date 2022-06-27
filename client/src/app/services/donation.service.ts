import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDonation } from '../models/donation.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DonationService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getDonationsByID(id: number) {
    return this.http.get<IDonation[]>(
      this.baseUrl + 'api/donations/getDonationsByDonor/' + id
    );
  }
}

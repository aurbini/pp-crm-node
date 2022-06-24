import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { DonorsDTO } from '../models/donorsDTO.model';
import { IDonor } from '../models/donor.model';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DonorService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getDonors() {
    return this.http.get<IDonor[]>(this.baseUrl + 'api/donors/getDonors');
  }
  getDonorByID(id: number) {
    return this.http.get<IDonor>(
      this.baseUrl + 'api/donors/getDonorByID/' + id
    );
  }
  addDonor(body: any) {
    const post = { id: null, title: 'adsf', content: ';lkj' };

    return this.http.post(this.baseUrl + 'api/donors/addDonor', post);
  }
  modifyDonor(id: number, body: any) {
    console.log(body);
    return this.http.put(this.baseUrl + 'api/donors/editDonor/' + id, body);
  }
  deleteSelectedDonor(donorID: number) {
    return this.http.delete(this.baseUrl + 'api/donors/deleteDonor/' + donorID);
  }
}

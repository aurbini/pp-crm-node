import { Injectable } from '@angular/core';
import { IDonor } from '../models/donor.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { INote } from '../models/note.model';

@Injectable({ providedIn: 'root' })
export class SearchService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getSearchCategories(): SearchCategory[] {
    return new SearchCategories().getSearchCategories();
  }

  customDonorSearch(searchArr: any[]) {
    // console.log(this.baseUrl + 'api/donors/customSearch');
    const searchObj = { ...searchArr };
    return this.http
      .post<any>(this.baseUrl + 'api/donors/customSearch', searchObj)
      .subscribe();
  }
  downloadCustomDonorSearch() {
    this.http
      .get(this.baseUrl + 'api/donors/downloadFile', {
        responseType: 'arraybuffer',
      })
      .subscribe((data) => {
        const type = 'application/ms-excel';
        let blob = new Blob([data], { type: type });
        let url = window.URL.createObjectURL(blob);
        let pwa = window.open(url);
        if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
          alert('Please disable your Pop-up blocker and try again.');
        }
      });
  }
}

class SearchCategories {
  searchCategoriesArr: SearchCategory[] = [];
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  finalName: string;
  email: string;
  phone: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  stateID: string;
  zip: string;
  occupation: string;
  isIndividual: string;
  constructor() {
    this.id = 0;
    this.firstName = 'firstName';
    this.middleName = 'middleName';
    this.lastName = 'lastName';
    this.finalName = 'finalName';
    this.email = 'email';
    this.phone = 'phone';
    this.street1 = 'street1';
    this.street2 = 'street2';
    this.city = 'city';
    this.state = 'state';
    this.stateID = 'stateID';
    this.zip = 'zip';
    this.occupation = 'occupation';
    this.isIndividual = 'isIndividual';
  }
  getSearchCategories(): SearchCategory[] {
    const searchCategories = new SearchCategories();

    for (const [k, v] of Object.entries(searchCategories)) {
      if (k !== 'id') {
        this.searchCategoriesArr.push({
          title: k,
          value: v,
        });
      }
    }
    return this.searchCategoriesArr;
  }
}
export interface SearchCategory {
  title: string;
  value: string;
}

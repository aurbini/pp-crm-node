import { Injectable } from '@angular/core';
import { IDonor } from '../models/donor.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { INote } from '../models/note.model';
import { SearchType } from 'src/app/models/searchType.enum';
import { IVoter } from '../models/voter.model';
import { IDonation } from '../models/donation.model';
import { EmailValidator } from '@angular/forms';
import { SearchCategory } from '../models/searchCategory.interface';
import { throwError, map, catchError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSearchCategories(search: SearchType): SearchCategory[] {
    return new SearchCategories(search).constructSearchCategories();
  }

  downloadCustomReport(
    paramObject: any,
    searchType: string,
    row: number,
    spinner: any
  ): any {
    let queryParams = new HttpParams();
    for (const key in paramObject) {
      queryParams = queryParams.append(key, paramObject[key]);
    }
    return this.http
      .get(
        this.baseUrl +
          'api/search/downloadCustomFile/' +
          searchType +
          '/' +
          row,
        {
          responseType: 'arraybuffer',
          params: queryParams,
        }
      )
      .pipe(
        map((data) => {
          spinner.hide();
          const type = 'application/ms-excel';
          let blob = new Blob([data], { type: type });
          let url = window.URL.createObjectURL(blob);
          let pwa = window.open(url);
          if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
            alert('Please disable your Pop-up blocker and try again.');
          }
        }),
        catchError((err) => {
          return throwError(err); //Rethrow it back to component
        })
      );
  }
}

class SearchCategories {
  searchCategoriesArr: SearchCategory[] = [];
  searchObject: DonorCategories | VoterCategories | Donation;
  searchType: SearchType;

  constructor(SearchType: SearchType) {
    this.searchType = SearchType;
  }
  constructSearchCategories() {
    if (this.searchType == SearchType.donor)
      this.searchObject = new DonorCategories();
    else if (this.searchType == SearchType.voter)
      this.searchObject = new VoterCategories();
    else this.searchObject = new Donation();
    for (const [k, v] of Object.entries(this.searchObject)) {
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
export class DonorCategories {
  ID = 'ID';
  firstName = 'firstName';
  middleName = 'middleName';
  lastName = 'lastName';
  finalName = 'finalName';
  email = 'email';
  phone = 'phone';
  street1 = 'street1';
  street2 = 'street2';
  city = 'city';
  state = 'state';
  stateID = '';
  zip = 'zip';
  occupation = 'occupation';
  isIndividual = 'isIndividual';
  constructor() {}
}
export class VoterCategories {
  id = 'id';
  zipCode = 'zipCode';
  zipCodeFour = 'zipCodeFour';
  previousAddress = 'previousAddress';
  public firstName: string = 'firstName';
  public middleName: string = 'middleName';
  public lastName = 'lastName';
  public email = 'email';
  public phone = 'phone';
  public dateOfBirth = 'dateOfBirth';
  public gender = 'gender';
  public address = 'address';
  public city = 'city';
  public countyName = 'countyName';
  public countyID = 'countyID';
  public stateCode = 'stateCode';
  public ZIPCodeFour = 'ZIPCodeFour';
  public mailingAddress = 'mailingAddress';
  public politicalPartyCode = 'politicalPartyCode';
  public electionDistrict = 'electionDistrict';
  public legislativeDistrict = 'legislativeDistrict';
  public townCity = 'townCity';
  public ward = 'ward';
  public congressionalDistrict = 'congressionalDistrict';
  public senateDistrict = 'senateDistric';
  public assemblyDistrict = 'assemblyDistrict';
  public lastYearVoted = 'lastYearVoted';
  public previousCountyID = 'previousCountyID';
  public previousName = 'previousName';
  public countyVRNumber = 'countyVRNumber';
  public statusCode = 'statusCode';
  public voterID = 'voterID';
  public voterHistory = 'voterHistory';
  stateFIPS = 'stateFIPS';

  constructor() {}
}
export class Donation {
  ID = 'ID';
  donor = 'donor';
  firstName = 'firstName';
  middleName = 'middleName';
  lastName = 'lastName';
  email = 'email';
  committeeType = 'committeeType';
  street1 = 'street1';
  street2 = 'street2';
  city = 'city';
  state = 'state';
  zip = 'zip';
  date = 'date';
  amount = 'amount';
  occupation = 'occupation';
  employerStreet1 = 'employerStreet1';
  employerStreet2 = 'employerStreet2';
  employerCity = 'employerCity';
  employerState = 'employerState';
  employerZip = 'employerZip';
  IntermediaryDonation = 'IntermediaryDonation';
  IntermediaryName = 'IntermediaryName ';
  IntermediaryStreet1 = 'IntermediaryStreet1';
  IntermediaryStreet2 = 'IntermediaryStreet2';
  IntermediarySity = 'IntermediarySity';
  IntermediaryState = 'IntermediaryState';
  IntermediaryZip = 'IntermediaryZip';
  IntermediaryEmail = 'IntermediaryEmail';
  activeStatus = 'activeStatus';
  committeeID = 'committeeID';
  orgType = 'orgType';
  party = 'party';
  recordType = 'recordType';
  recipient = 'recipient';
  cycle = 'cycle';
  FinalName = 'FinalName';
  isIndividual = 'isIndividual';
}

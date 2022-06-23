import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDonor } from '../models/donor.model';
import { environment } from '../../environments/environment';
import { IVoter } from '../models/voter.model';

@Injectable({ providedIn: 'root' })
export class VoterService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getVoters() {
    return this.http.get<IVoter[]>(this.baseUrl + '/voter/getVoters');
  }
}

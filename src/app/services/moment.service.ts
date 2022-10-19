import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';

import { environment } from 'src/environments/environment';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api-moments/`;

  constructor(private http: HttpClient) {}

  createMoment(moment: Moment): Observable<Response<Moment>> {
    return this.http.post<Response<Moment>>(this.apiUrl + 'moment', moment);
  }

  getMoment(id: number): Observable<Response<Moment>> {
    return this.http.get<Response<Moment>>(this.apiUrl + 'moments/' + id);
  }

  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl + 'moments');
  }
}

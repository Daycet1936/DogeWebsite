import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoincapService {

  private readonly url = 'https://api.coincap.io/v2';

  constructor(readonly http: HttpClient) {
  }
  public getCourId(id: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url + '/assets/' + id, {observe: 'response'});
  }

  public getCours(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url + '/assets/' , {observe: 'response'});
  }

  public getExchanges(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url + '/exchanges/', {observe: 'response'});
  }

}

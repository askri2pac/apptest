import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiUrl} from '../../../api-url';
import {map} from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {RequestHandlerService} from '../auth/requestHandler';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };
  constructor(private http: HttpClient, private requestHandlerService: RequestHandlerService) { }
  findAnnuiare(annuaire: any, adresse: string) {
    return this.http.post<any>(apiUrl + '/annuaire/find', {annuaire: annuaire, adresse: adresse}, this.httpOptions)
      .pipe(
        map(annFind => {
          return annFind;
          }),
        catchError(err => this.requestHandlerService.handleError(err))
      );
  }
}

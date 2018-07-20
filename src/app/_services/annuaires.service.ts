import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiUrl} from '../../api-url';
import {map} from 'rxjs/operators';
import {addToViewTree} from '@angular/core/src/render3/instructions';
import {catchError} from 'rxjs/internal/operators';
import {RequestHandlerService} from './requestHandler';

@Injectable()
export class AnnuairesService {

  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };
  constructor(private http: HttpClient, private requestHandlerService: RequestHandlerService) {}
  getActivities() {
    return this.http.get<any>(apiUrl + '/activities', this.httOptions)
      .pipe(
        map(activities => {
          return activities;
        }),
        catchError(err => this.requestHandlerService.handleError(err))
      );
  }
}

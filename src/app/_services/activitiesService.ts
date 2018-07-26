import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiUrl} from '../../api-url';
import {catchError} from 'rxjs/internal/operators';
import {RequestHandlerService} from './requestHandler';
import {Observable} from 'rxjs/index';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/operators/map';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';



@Injectable()
export class ActivitiesService {

  baseUrl: 'http://localhost:3000';
  queryUrl: '?search=';

  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };
 constructor(private http: HttpClient, private requestHandlerService: RequestHandlerService) {}
  search(terms: Observable<string>) {
      return terms.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => this.getActivities(term))
      );
  }
 getActivities(term) {
   const _url = 'http://localhost:3000/' + 'activities/getAllActivities/' + term;
     return this.http.get<any>(_url, this.httOptions)
       .pipe(
         map(this.extractData),
         catchError(err => this.requestHandlerService.handleError(err))
       );
 }
  public extractData(res: Response | any) {
    return res || { };
  }
}

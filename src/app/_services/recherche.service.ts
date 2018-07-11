import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiUrl} from '../../api-url';
import {map} from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {RequestHandlerService} from './requestHandler';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {

  constructor(private http: HttpClient, private requestHandlerService: RequestHandlerService) { }
  findAnnuiare(annuaire: string, place: string){
    return this.http.post<any>(apiUrl + '/recherche', {annuaire: annuaire, place: place})
      .pipe(
        map(annFind => {
          console.log('finded annuaire', annFind);
          return annFind;
          }),
        catchError(err => this.requestHandlerService.handleError(err))
      );
  }
}

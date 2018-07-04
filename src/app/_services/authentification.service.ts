import {HttpClient} from '@angular/common/http';
import {apiUrl} from '../../api-url'  ;
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {RequestHandlerService} from './requestHandler';
import {catchError} from 'rxjs/internal/operators';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthentificationService {
  constructor(private http: HttpClient, private requestHandlerService: RequestHandlerService) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(apiUrl + '/users/authenticate', {username: username, password: password})
      .pipe(
        map(user => {
          console.log('exist user', user);
          // login successuful if there is an jwt token in the response
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        }),
        catchError(err => this.requestHandlerService.handleError(err))
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  public getToken(): string {
    return localStorage.getItem('currentUser');
  }

  public isAuthentificated(): boolean {
    const token = this.getToken();
    return tokenNotExpired(token);
  }

}

import {Injectable} from '@angular/compiler/src/core';
import {HttpClient} from '@angular/common/http';
import { apiUrl } from '../../api-url'  ;
import {map} from 'rxjs-compat/operator/map';

@Injectable()
export class AuthentificationService {
  constructor(private http: HttpClient) {}
  login(username: string, password: string) {
    return this.http.post<any>(apiUrl + 'users/authentificate', {username: username, password: password})
      .pipe(map(user => {
        // login successuful if there is an jwt token in the response
        if (user && user.token){
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}

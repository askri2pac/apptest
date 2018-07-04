import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Observable} from 'rxjs/index';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthentificationService){
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(req);
  }
}

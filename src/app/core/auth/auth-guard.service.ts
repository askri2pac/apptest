import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import { AuthentificationService } from './authentification.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthentificationService, public router: Router){
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.isAuthentificated()) {
      this.router.navigate(['contact']);
      return false;
    }
    return true;
  }

}

import {Injectable} from '@angular/core';
import {throwError as observableThrowError, zip as observableZip, Observable} from 'rxjs';


@Injectable()
export class RequestHandlerService {
  constructor () {
  }
  public handleError (error: Response |any) {
    console.log(error);
    if (error.status === 401) {
      console.log('hello 401');
    } else if (error.status === 0) {
      console.log('hello  0');
    }
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      console.log('hello', body);
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return observableThrowError(error);
  }
}


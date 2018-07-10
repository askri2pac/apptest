import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';

@Injectable()
export class DataService {
  private searchItem = new BehaviorSubject('default search');
  private searchPlace = new BehaviorSubject('default place');
  currentSearch = this.searchItem.asObservable();
  currentPlace = this.searchPlace.asObservable();
  constructor() {}
  changeMessage(item: string, place: string) {
   this.searchItem.next(item);
   this.searchPlace.next(place);
  }
}

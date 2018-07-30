import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';

@Injectable()
export class DataService {
  private searchItem = new BehaviorSubject('');
  private searchPlace = new BehaviorSubject('default place');
  private searchPhone = new BehaviorSubject('');
  currentSearch = this.searchItem.asObservable();
  currentPlace = this.searchPlace.asObservable();
  phoneNumber = this.searchPhone.asObservable();
  constructor() {}
  changeMessage(item: string, place: string) {
   this.searchItem.next(item);
   this.searchPlace.next(place);
  }
  sendPhoneNumber(phone: string, place: string) {
    console.log('here');
    this.searchPlace.next(place);
    this.searchPhone.next(phone);
  }
}

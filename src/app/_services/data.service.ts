import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';

@Injectable()
export class DataService {
  private searchactiviItem = new BehaviorSubject('');
  private searchPlace = new BehaviorSubject('default place');
  private searchPhone = new BehaviorSubject('');
  private searchname = new BehaviorSubject('');
  currentSearch = this.searchactiviItem.asObservable();
  currentPlace = this.searchPlace.asObservable();
  phoneNumber = this.searchPhone.asObservable();
  nameAnnuaire = this.searchname.asObservable();
  constructor() {}
  changeMessage(activite: string, nom: string, place: string) {
   this.searchactiviItem.next(activite);
   this.searchPlace.next(place);
   this.searchname.next(nom);
  }
  sendPhoneNumber(phone: string, place: string) {
    this.searchPlace.next(place);
    this.searchPhone.next(phone);
  }
}

import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../_services/data.service';
import {RechercheService} from '../../../_services/recherche.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {BehaviorSubject} from 'rxjs/index';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  activite: string;
  place: string;
  phone: string;
  name: string;
  donnee: any;
  httploader: any;
  httpEnd: any;
  httpOk: boolean;

  constructor(private dataservice: DataService,
              private recherheService: RechercheService,
              private spinner: NgxSpinnerService) { this.httpOk = false; }

  ngOnInit() {
    this.spinner.show();
    this.dataservice.currentSearch.subscribe(activite => this.activite = activite);
    this.dataservice.currentPlace.subscribe(place => this.place = place);
    this.dataservice.phoneNumber.subscribe(phone => this.phone = phone);
    this.dataservice.nameAnnuaire.subscribe(name => this.name = name);
    this.httpEnd = new BehaviorSubject(false);
    this.httploader = this.httpEnd.asObservable();
    this.httploader.subscribe(value => {
      if (value === true) {
        console.log('value', value);
        this.spinner.hide();
        this.httpOk = true;
      }
    });
    if (this.activite) {
      this.recherheService.findAnnuiare(this.activite, this.place).subscribe(
        data => {
          this.donnee = data[0].telephone;
          setTimeout(() => {
            this.httpEnd.next(true);
          }, 2000);
        },
        error2 => {
          console.log('err');
        }
      );
    } else if (this.name) {
      this.recherheService.findAnnuiare(this.name, this.place).subscribe(
        data => {
          this.donnee = data[0].telephone;
          setTimeout(() => {
            this.httpEnd.next(true);
          }, 2000);
        },
        error2 => {
          console.log('err');
        }
      );
    } else if (this.phone) {
      this.recherheService.findAnnuiare(this.phone, this.place).subscribe(
        data => {
          this.donnee = data[0].telephone;
          setTimeout(() => {
            this.httpEnd.next(true);
          }, 2000);
        },
        error2 => {
          console.log('err');
        }
      );
    }
  }

}

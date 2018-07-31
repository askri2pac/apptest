import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../_services/data.service';
import {RechercheService} from '../../../_services/recherche.service';
import {log} from 'util';
import {el} from '@angular/platform-browser/testing/src/browser_util';

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

  constructor(private dataservice: DataService, private recherheService: RechercheService) { }

  ngOnInit() {
    this.dataservice.currentSearch.subscribe(activite => this.activite = activite);
    this.dataservice.currentPlace.subscribe(place => this.place = place);
    this.dataservice.phoneNumber.subscribe(phone => this.phone = phone);
    this.dataservice.nameAnnuaire.subscribe(name => this.name = name);
    if (this.activite) {
      console.log('activite', this.activite);
      this.recherheService.findAnnuiare(this.activite, this.place).subscribe(
        data => {
          console.log('data is ', data);
          this.donnee = data[0].telephone;
        },
        error2 => {
          console.log('err');
        }
      );
    } else if (this.name) {
      console.log('name', this.name);
      this.recherheService.findAnnuiare(this.name, this.place).subscribe(
        data => {
          console.log('data is ', data);
          this.donnee = data[0].telephone;
        },
        error2 => {
          console.log('err');
        }
      );
    } else if (this.phone) {
      console.log('tel ', this.phone);
      this.recherheService.findAnnuiare(this.phone, this.place).subscribe(
        data => {
          console.log('data is ', data);
          this.donnee = data[0].telephone;
        },
        error2 => {
          console.log('err');
        }
      );
    }
  }

}

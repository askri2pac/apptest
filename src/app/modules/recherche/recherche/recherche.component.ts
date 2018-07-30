import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../_services/data.service';
import {RechercheService} from '../../../_services/recherche.service';
import {log} from 'util';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  search: string;
  place: string;
  phone: string;
  donnee: any;

  constructor(private dataservice: DataService, private recherheService: RechercheService) { }

  ngOnInit() {
    this.dataservice.currentSearch.subscribe(item => this.search = item);
    this.dataservice.currentPlace.subscribe(place => this.place = place);
    this.dataservice.phoneNumber.subscribe(phone => this.phone = phone);
    if (this.search) {
      console.log('activite', this.search);
      this.recherheService.findAnnuiare(this.search, this.place).subscribe(
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

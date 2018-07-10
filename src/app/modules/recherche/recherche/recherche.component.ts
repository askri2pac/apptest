import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../_services/data.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  message: string;
  place: string;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.currentSearch.subscribe(item => this.message = item);
    this.dataservice.currentPlace.subscribe(place => this.place = place);
  }

}

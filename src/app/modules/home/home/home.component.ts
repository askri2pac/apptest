import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import {DataService} from '../../../_services/data.service';
import {Router} from '@angular/router';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgxSmartModalService],
})
export class HomeComponent implements OnInit {
  private bodyText: string;
  search: string;
  place: string;
  options: any;

  public userSettings3: any = {
    showCurrentLocation: false,
    resOnSearchButtonClickOnly: true,
    inputPlaceholderText: 'Où : Lille, Alsace, Bd Voltaire, ...',
    recentStorageName: 'componentData3',
    showSearchButton: false,
  };

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private dataService: DataService,
    private router: Router,
  ) {
   /* setTimeout(() => {
      this.userSettings3['inputPlaceholderText'] = 'This is delayed test';
      this.userSettings3 = Object.assign({}, this.userSettings3);
    }, 5000);
    setTimeout(() => {
      this.userSettings3['inputString'] = 'Bangalore, karnataka';
      this.userSettings3 = Object.assign({}, this.userSettings3);
    }, 10000);*/
   this.options = {
     types: [],
     componentRestrictions: { country: 'FR'}
   };
  }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
   // this.dataService.currentMessage.subscribe(search => this.search = search);

  }
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;

  public handleAddressChange(address: Address) {
    // Do some stuff
    console.log(address.formatted_address);
    this.place = address.formatted_address;
  }
  onSubmit() {
    this.dataService.changeMessage(this.search, this.place);
    this.router.navigate(['/recherche']);
  }
}

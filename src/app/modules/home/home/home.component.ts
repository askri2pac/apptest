import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgxSmartModalService],
})
export class HomeComponent implements OnInit {
  private bodyText: string;

  public userSettings3: any = {
    showCurrentLocation: false,
    resOnSearchButtonClickOnly: true,
    inputPlaceholderText: 'Où : Lille, Alsace, Bd Voltaire, ...',
    recentStorageName: 'componentData3',
    showSearchButton: false,
  };

  constructor(public ngxSmartModalService: NgxSmartModalService) {
   /* setTimeout(() => {
      this.userSettings3['inputPlaceholderText'] = 'This is delayed test';
      this.userSettings3 = Object.assign({}, this.userSettings3);
    }, 5000);
    setTimeout(() => {
      this.userSettings3['inputString'] = 'Bangalore, karnataka';
      this.userSettings3 = Object.assign({}, this.userSettings3);
    }, 10000);*/
  }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }
  autoCompleteCallback1(selectedData:any) {
    // do any necessery stuff.
  }

}

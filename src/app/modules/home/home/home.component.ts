import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userSettings3: any = {
    showCurrentLocation: false,
    resOnSearchButtonClickOnly: true,
    inputPlaceholderText: 'Où : Lille, Alsace, Bd Voltaire, ...',
    recentStorageName: 'componentData3'
  };

  constructor() {
    setTimeout(() => {
      this.userSettings3['inputPlaceholderText'] = 'This is delayed test';
      this.userSettings3 = Object.assign({}, this.userSettings3);
    }, 5000);
    setTimeout(() => {
      this.userSettings3['inputString'] = 'Bangalore, karnataka';
      this.userSettings3 = Object.assign({}, this.userSettings3);
    }, 10000);
  }

  ngOnInit() {
  }

  autoCompleteCallback1(selectedData:any) {
    // do any necessery stuff.
  }

}

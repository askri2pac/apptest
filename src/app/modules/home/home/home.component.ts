import {Component, NgModule, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import {DataService} from '../../../_services/data.service';
import {Router} from '@angular/router';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from 'ng-auto-complete';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {map, startWith} from 'rxjs/internal/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgxSmartModalService],
})


export class HomeComponent implements OnInit {

  myControl = new FormControl();
  options1: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]>;

  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  public group = [
    CreateNewAutocompleteGroup(
      'Search / choose in / from list',
      'completer',
      [
        {title: 'Option 1', id: '1'},
        {title: 'Option 2', id: '2'},
        {title: 'Option 3', id: '3'},
        {title: 'Option 4', id: '4'},
        {title: 'Option 5', id: '5'},
      ],
      {titleKey: 'title', childrenKey: null}
    ),
  ];
  private bodyText: string;
  search: string;
  place: string;
  options: any;
  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private dataService: DataService,
    private router: Router,
  ) {
   this.options = {
     types: [],
     componentRestrictions: { country: 'FR'}
   };
  }
  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options1.slice())
      );
  }
  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options1.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

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

import {AfterViewInit, Component, NgModule, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';
import {DataService} from '../../../core/data/data.service';
import {Router} from '@angular/router';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {NgAutocompleteComponent} from 'ng-auto-complete';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs/index';
import {ActivitiesService} from '../../../core/activity/activitiesService';
import {MatMenuTrigger} from '@angular/material';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';


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

export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  results: [any];
  searchTerms$ = new Subject<string>();
  selectedValue$ = new Subject<string>();
  myControl = new FormControl();
  private bodyText: string;
  search: string;
  searchvalue: string;
  place: string;
  fullAdresse: any;
  idactivity: any;
  options: any;
  chosenvalue: any;
  activities$: any;
  activities: any;
  optionsActivies: any;
  filteredOptions: any;
  public model: any;
  validate: boolean;
  httpOk: boolean;

  constructor(public ngxSmartModalService: NgxSmartModalService,
              private dataService: DataService,
              private router: Router,
              private activiteService: ActivitiesService,
              private spinner: NgxSpinnerService
  ) {
    this.options = {
      types: [],
      componentRestrictions: {country: 'FR'}
    };
      this.activiteService.search(this.searchTerms$)
        .subscribe(results => {
          this.results = results;
          // this.trigger.openMenu();
        });
     this.selectedValue$.pipe(
       debounceTime(400),
       distinctUntilChanged(),
       switchMap(term => this.setInputValue(term))
     );
  }
  onClickedOutside(event: any) {
   // event.preventDefault();
    if (document.getElementById('dop-list')) {
      document.getElementById('dop-list').hidden = true;
    }
  }
  showlist() {
    if (document.getElementById('dop-list')) {
      document.getElementById('dop-list').hidden = false;
    }
  }
  bindselectd(item) {
    if (typeof item === 'string') {
      this.searchvalue = item;
      /*this.search = item;*/
      /*document.getElementById('input-search').setAttribute('value', item);*/
      if (document.getElementById('dop-list')) {
        document.getElementById('dop-list').hidden = true;
      }
    } else if (typeof item === 'object') {
      this.searchvalue = item.title;
      this.idactivity = item.id;
      /*this.search = item.id;*/
      /*document.getElementById('input-search').setAttribute('value', item.title);*/
      if (document.getElementById('dop-list')) {
        document.getElementById('dop-list').hidden = true;
      }
    }
  }
  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.filteredOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  public handleAddressChange(address: Address) {
    // Do some stuff
    this.place = address.formatted_address;
    this.fullAdresse = address;
  }

  onSubmit() {

    if (typeof this.fullAdresse === 'object') {
      const isnum  = /^\d+$/.test(this.searchvalue);
      if (isnum) {
        this.dataService.sendPhoneNumber(this.searchvalue, this.place);
      } else {
        this.dataService.changeMessage(this.idactivity, this.searchvalue, this.place);
      }
      this.validate = true;
      this.router.navigate(['/recherche']);
    } else {
      this.validate = false;
    }

  }

  getNames() {
    // todo
  }

  getPhoneNumbers() {
    // todo
  }

  getActivities() {
    // todo
    // this.activiteService.getActivities()
    /* return new Promise((resolve, reject) => {
     this.optionsActivies = resolve(this.activiteService.getActivities());
     return this.optionsActivies;
     });*/
  }

  ngAfterViewInit(): void {
    /*  const  input: any = document.getElementById('search1');
         const search$ = fromEvent(input, 'keyup')
    }*/
  }
  setInputValue(term) {
     return term.nom;
  }
}

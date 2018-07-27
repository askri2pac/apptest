import {AfterViewInit, Component, NgModule, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';
import {DataService} from '../../../_services/data.service';
import {Router} from '@angular/router';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {NgAutocompleteComponent} from 'ng-auto-complete';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs/index';
import {ActivitiesService} from '../../../_services/activitiesService';
import {MatMenuTrigger} from '@angular/material';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';



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

  results: any;
  searchTerms$ = new Subject<string>();
  selectedValue$ = new Subject<string>();
  myControl = new FormControl();
  private bodyText: string;
  search: string;
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

  constructor(public ngxSmartModalService: NgxSmartModalService,
              private dataService: DataService,
              private router: Router,
              private activiteService: ActivitiesService) {
    this.options = {
      types: [],
      componentRestrictions: {country: 'FR'}
    };
    this.activiteService.search(this.searchTerms$)
      .subscribe(results => {
         this.results = results;
        // this.trigger.openMenu();
        console.log('resultes returned', this.results);
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
    this.search = item.nom;
    this.idactivity = item._id;
    document.getElementById('input-search').setAttribute('value', item.nom);
    if (document.getElementById('dop-list')) {
      document.getElementById('dop-list').hidden = true;
    }
  }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
    // this.reload();
  //  console.log(this.activities);
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
    console.log(address.formatted_address);
    this.place = address.formatted_address;
    this.fullAdresse = address;
  }

  onSubmit() {
    console.log('search ==>', this.search);
    console.log('place ==>', this.place);
    if (typeof this.fullAdresse !== 'object') {
      this.validate = false;
    } else {
      this.validate = true;
      this.dataService.changeMessage(this.idactivity, this.place);
      this.router.navigate(['/recherche']);
    }
    /*this.dataService.changeMessage(this.idactivity, this.place);
    this.router.navigate(['/recherche']);*/

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
    // console.log(this.activities);
    /*  const  input: any = document.getElementById('search1');
        console.log('input is ==>', input.value);
         const search$ = fromEvent(input, 'keyup')
           .do(() => console.log(this.activities));
    }*/
  }
  setInputValue(term) {
    console.log('sssssssssssssssssss', term);
     return term.nom;
  }
}

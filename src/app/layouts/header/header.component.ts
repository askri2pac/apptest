import {Component, HostBinding, NgModule, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';
import {ModalComponent} from '../custom/_directives';
import {HomeComponent} from '../../pages/home/home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {DataService} from '../../core/data/data.service';
import { NgbDropdown,NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgxSmartModalService],
})

@NgModule({
  imports: [
    NgxSmartModalModule,
    NoopAnimationsModule,
    NgbDropdownModule.forRoot(),
  ],
  declarations: [HomeComponent, ModalComponent],
})
export class HeaderComponent implements OnInit {
  @HostBinding('@.disabled')
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  menuopen: boolean;

  constructor(public ngxSmartModalService: NgxSmartModalService,
              public ngxSmartModalService1: NgxSmartModalService,
              private dataService: DataService) { this.menuopen = false; }

  ngOnInit() {
    this.ngxSmartModalService.closeLatestModal();
  }

    myFunction() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  openMenu() {
   this.menuopen = ! this.menuopen;
   this.dataService.menuState(this.menuopen);
    if (this.menuopen) {
      console.log('menu open ?', this.menuopen);
      document.getElementById('user-link').style.backgroundColor = '#333';
    } else {
       document.getElementById('user-link').style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
      // document.getElementById('user-link').style.opacity = '0.75';
      // document.getElementById('user-link').style.opacity = '0.7';
    }
  }

}

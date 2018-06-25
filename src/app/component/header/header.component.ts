import {Component, NgModule, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';
import {ModalComponent} from '../custom/_directives';
import {HomeComponent} from '../../modules/home/home/home.component';
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
  ],
  declarations: [HomeComponent, ModalComponent]
})
export class HeaderComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

    myFunction() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

}

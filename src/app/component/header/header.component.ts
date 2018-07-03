import {Component, HostBinding, NgModule, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';
import {ModalComponent} from '../custom/_directives';
import {HomeComponent} from '../../modules/home/home/home.component';
import { ModalBodyComponent } from '../modal-body/modal-body.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
    NoopAnimationsModule
  ],
  declarations: [HomeComponent, ModalComponent, ModalBodyComponent]
})
export class HeaderComponent implements OnInit {
  @HostBinding('@.disabled')
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

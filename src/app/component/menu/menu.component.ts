import {Component, NgModule, OnInit} from '@angular/core';
import {DataService} from '../../_services/data.service';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ModalLoginComponent} from '../modal-login/modal-login.component';
import {ModalSubscribeComponent} from '../modal-subscribe/modal-subscribe.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
@NgModule({
  declarations: [ModalLoginComponent, ModalSubscribeComponent]
})
export class MenuComponent implements OnInit {

  isopen: boolean;

  constructor(private dataService: DataService,
              public ngxSmartModalService: NgxSmartModalService) {
    this.dataService.menu.subscribe(isopen => this.isopen = isopen);
  }

  ngOnInit() {
  }

}

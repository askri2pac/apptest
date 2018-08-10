import {AfterViewInit, Component, NgModule, OnInit} from '@angular/core';
import {DataService} from '../../_services/data.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {ModalLoginComponent} from '../modal-login/modal-login.component';
import {ModalSubscribeComponent} from '../modal-subscribe/modal-subscribe.component';
import {ViewChild, ElementRef} from '@angular/core';
import {ModalBodyComponent} from '../modal-body/modal-body.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
@NgModule({
  declarations: [ModalLoginComponent, ModalSubscribeComponent]
})
export class MenuComponent implements OnInit, AfterViewInit {
  isopen: boolean;
  fullName: string;
  @ViewChild('myModal') nameInputRef: ElementRef;

  constructor(private dataService: DataService,
              public ngxSmartModalService: NgxSmartModalService) {
    this.dataService.menu.subscribe(isopen => this.isopen = isopen);
  }
  ngOnInit() {
  }
  ngAfterViewInit(): void {
    // this.fullName = this.nameInputRef.nativeElement.identifier;
  }
}

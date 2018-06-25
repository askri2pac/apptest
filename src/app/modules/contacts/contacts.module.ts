import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';

import { ModalComponent } from '../../component/custom/_directives';
import { ModalService } from '../../component/custom/_services';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
  ],
  declarations: [ContactsComponent, ModalComponent], providers: [ModalService]
})
export class ContactsModule { }

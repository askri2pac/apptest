import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';

import { ModalService } from '../../component/custom/_services';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
  ],
  declarations: [ContactsComponent], providers: [ModalService]
})
export class ContactsModule { }

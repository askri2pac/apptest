import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MatInputModule,
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }

import { Component } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  contacts: Contact[];

  constructor(contactsService: ContactsService) {
    this.contacts = contactsService.getAll();
  }
}

import { Component } from '@angular/core';

interface IContact {
  id: number;
  username: string;
  phoneNumber: number;
  email: string;
  dateAdded: string;
}


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  
  contacts: IContact[] =
  [
      {
      id: 1,
      username: 'Omar Hatem',
      phoneNumber: 1114316342,
      email: 'omarhatemun11@gmail.com',
      dateAdded: '2023-10-01'
      },
      {
        id: 2,
        username: 'Anas',
        phoneNumber: 1000234455,
        email: 'anasalaraby@gmail.com',
        dateAdded: '2023-10-01'
      },
      {
        id: 3,
        username: 'Arwa',
        phoneNumber: 1000234455,
        email: 'arwahazem@gmail.com',
        dateAdded: '2023-10-01'
      },
    ]
  
  
}

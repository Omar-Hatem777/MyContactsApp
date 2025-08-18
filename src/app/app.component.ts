import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { Contact } from '../shared/contact.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactItemComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Contact Manager';
  
  contacts: Contact[] = [
    {
      id: 1,
      name: 'Omar Hatem',
      phone: '1114316342',
      email: 'omarhatemun11@gmail.com',
      dateAdded: '2023-10-01'
    },
    {
      id: 2,
      name: 'Anas',
      phone: '1000234455',
      email: 'anasalaraby@gmail.com',
      dateAdded: '2023-10-01'
    },
    {
      id: 3,
      name: 'Arwa',
      phone: '1000234455',
      email: 'arwahazem@gmail.com',
      dateAdded: '2023-10-01'
    }
  ];

  showAddContactForm: boolean = false;
  isEditMode: boolean = false;
  contactToEdit: Contact | null = null;

  toggleAddContactForm(): void {
    this.showAddContactForm = !this.showAddContactForm;
    this.isEditMode = false;
    this.contactToEdit = null;
  }

  addContact(contact: Contact): void {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
    this.showAddContactForm = false;
    console.log('Contact added successfully:', contact);
  }

  editContact(contact: Contact): void {
    this.contactToEdit = contact;
    this.isEditMode = true;
    this.showAddContactForm = true;
  }

  updateContact(contact: Contact): void {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index !== -1) {
      this.contacts[index] = contact;
      this.showAddContactForm = false;
      this.isEditMode = false;
      this.contactToEdit = null;
      console.log('Contact updated successfully:', contact);
    }
  }

  deleteContact(contactId: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== contactId);
    console.log(`Contact with ID ${contactId} deleted successfully.`);
  }

  cancelForm(): void {
    this.showAddContactForm = false;
    this.isEditMode = false;
    this.contactToEdit = null;
  }

  onSaveContact(contact: Contact): void {
    if (this.isEditMode) {
      this.updateContact(contact);
    } else {
      this.addContact(contact);
    }
  }
}

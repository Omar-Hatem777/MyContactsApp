import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../shared/contact.interface';
import { PhoneFormatPipe } from '../pipes/phone-format.pipe';
import { DateFormatPipe } from '../pipes/date-format.pipe';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [CommonModule, PhoneFormatPipe, DateFormatPipe],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent {
  @Input() contact!: Contact;
  @Output() editContact = new EventEmitter<Contact>();
  @Output() deleteContact = new EventEmitter<number>();

  showDeleteConfirmation: boolean = false;

  onEdit(): void {
    this.editContact.emit(this.contact);
  }

  onDeleteClick(): void {
    this.showDeleteConfirmation = true;
  }

  confirmDelete(): void {
    this.deleteContact.emit(this.contact.id);
    this.showDeleteConfirmation = false;
  }

  cancelDelete(): void {
    this.showDeleteConfirmation = false;
  }
}

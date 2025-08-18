import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact } from '../shared/contact.interface';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  @Input() contactToEdit: Contact | null = null;
  @Input() isEditMode: boolean = false;
  @Output() saveContact = new EventEmitter<Contact>();
  @Output() cancelForm = new EventEmitter<void>();

  contact: Contact = {
    id: 0,
    name: '',
    phone: '',
    email: '',
    dateAdded: ''
  };

  ngOnInit(): void {
    if (this.contactToEdit && this.isEditMode) {
      this.contact = { ...this.contactToEdit };
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.saveContact.emit(this.contact);
    } else {
      this.contact.dateAdded = new Date().toISOString().split('T')[0];
      this.saveContact.emit(this.contact);
    }
  }

  onCancel(): void {
    this.cancelForm.emit();
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  successMessage = '';

  submitForm(contactForm: NgForm) {
    if (contactForm.invalid) {
      return; // Form invalid, do nothing
    }

    this.successMessage = '✅ Your message has been submitted successfully!';

    // Reset form data
    this.formData = { name: '', email: '', message: '' };
    contactForm.resetForm();

    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }
}

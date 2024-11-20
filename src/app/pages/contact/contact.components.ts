import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Get in Touch</h2>
        <div class="contact-container">
          <div class="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out! I'll get back to you as soon as possible.</p>
            <div class="contact-details">
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:ddissanayake2k&#64;gmail.com">ddissanayake2k&#64;gmail.com</a>
              </div>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <span>+94712642670</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form card">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" formControlName="name" class="form-control">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" formControlName="email" class="form-control">
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" formControlName="subject" class="form-control">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" formControlName="message" rows="5" class="form-control"></textarea>
            </div>
            <button type="submit" class="btn" [disabled]="!contactForm.valid">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
    }

    .contact-info {
      padding: 2rem;
    }

    .contact-info h3 {
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .contact-details {
      margin-top: 2rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .contact-form {
      padding: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-control {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }

    textarea.form-control {
      resize: vertical;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--primary-color);
    }

    @media (max-width: 768px) {
      .contact-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Implement form submission logic here
    }
  }
}
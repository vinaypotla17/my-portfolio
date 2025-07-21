import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  formStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';

  onSubmit() {
    if (this.contactForm.valid) {
      this.formStatus = 'submitting';
      this.http.post('https://formspree.io/f/mqalappo', this.contactForm.value)
        .subscribe({
          next: () => {
            this.formStatus = 'success';
            this.contactForm.reset();
          },
          error: () => {
            this.formStatus = 'error';
          }
        });
    }
  }
}

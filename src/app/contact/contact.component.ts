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
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
    message: ['', [Validators.required, Validators.maxLength(5000)]],
    _gotcha: ['']
  });

  formStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';

  onSubmit() {
    if (this.contactForm.controls._gotcha.value) {
      this.formStatus = 'success';
      this.contactForm.reset();
      return;
    }

    if (this.contactForm.invalid || this.formStatus === 'submitting') {
      return;
    }

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

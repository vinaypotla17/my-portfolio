import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    httpTesting = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => httpTesting.verify());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require a valid name, email, and message', () => {
    expect(component.contactForm.valid).toBeFalse();

    component.contactForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Hello',
      _gotcha: ''
    });

    expect(component.contactForm.valid).toBeTrue();
  });

  it('should silently block submissions when the honeypot is filled', () => {
    component.contactForm.setValue({
      name: 'Spam Bot',
      email: 'bot@example.com',
      message: 'Spam',
      _gotcha: 'https://spam.example'
    });

    component.onSubmit();

    httpTesting.expectNone('https://formspree.io/f/mqalappo');
    expect(component.formStatus).toBe('success');
  });

  it('shows validation instead of sending an incomplete form', () => {
    component.onSubmit();

    httpTesting.expectNone('https://formspree.io/f/mqalappo');
    expect(component.submitted).toBeTrue();
    expect(component.fieldError('name')).toBe('Enter your name.');
    expect(component.fieldError('email')).toBe('Enter your email address.');
    expect(component.fieldError('message')).toBe('Enter a message.');
  });

  it('lets the visitor retry after a send error', () => {
    component.contactForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Hello',
      _gotcha: ''
    });

    component.onSubmit();
    httpTesting.expectOne('https://formspree.io/f/mqalappo')
      .flush('nope', { status: 500, statusText: 'Server Error' });
    expect(component.formStatus).toBe('error');

    component.onSubmit();
    httpTesting.expectOne('https://formspree.io/f/mqalappo').flush({});
    expect(component.formStatus).toBe('success');
  });
});

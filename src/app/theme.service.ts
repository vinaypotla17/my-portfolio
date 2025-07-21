import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<'light' | 'dark'>('dark');

  constructor() {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      this.currentTheme.set(savedTheme);
    }

    effect(() => {
      localStorage.setItem('theme', this.currentTheme());
      if (this.currentTheme() === 'light') {
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.remove('light-theme');
      }
    });
  }

  toggleTheme() {
    this.currentTheme.set(this.currentTheme() === 'light' ? 'dark' : 'light');
  }
}

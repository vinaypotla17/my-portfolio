import { Injectable, effect, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<Theme>(this.initialTheme());

  constructor() {
    effect(() => {
      document.body.classList.toggle('light-theme', this.currentTheme() === 'light');
    });
  }

  toggleTheme() {
    const nextTheme: Theme = this.currentTheme() === 'light' ? 'dark' : 'light';
    this.currentTheme.set(nextTheme);
    localStorage.setItem('theme', nextTheme);
  }

  private initialTheme(): Theme {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }
}

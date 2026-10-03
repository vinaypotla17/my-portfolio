import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.removeItem('theme');
    TestBed.resetTestingModule();
  });

  function mediaQuery(matches: boolean): MediaQueryList {
    return { matches } as MediaQueryList;
  }

  it('uses light when nothing is saved and the system prefers light', () => {
    spyOn(window, 'matchMedia').and.returnValue(mediaQuery(false));

    const service = TestBed.inject(ThemeService);
    TestBed.flushEffects();

    expect(service.currentTheme()).toBe('light');
    expect(document.body.classList.contains('light-theme')).toBeTrue();
    expect(localStorage.getItem('theme')).toBeNull();
  });

  it('follows a dark system preference when nothing is saved', () => {
    spyOn(window, 'matchMedia').and.returnValue(mediaQuery(true));

    const service = TestBed.inject(ThemeService);
    TestBed.flushEffects();

    expect(service.currentTheme()).toBe('dark');
    expect(document.body.classList.contains('light-theme')).toBeFalse();
  });

  it('keeps a saved choice ahead of the system preference', () => {
    localStorage.setItem('theme', 'light');
    spyOn(window, 'matchMedia').and.returnValue(mediaQuery(true));

    const service = TestBed.inject(ThemeService);
    TestBed.flushEffects();

    expect(service.currentTheme()).toBe('light');

    service.toggleTheme();
    TestBed.flushEffects();

    expect(service.currentTheme()).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});

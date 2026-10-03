import { Component, inject, Input, Output, EventEmitter, signal } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent {
  @Input({ required: true }) activeSection!: string;
  @Output() sectionClick = new EventEmitter<string>();

  themeService = inject(ThemeService);
  menuOpen = signal(false);

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  selectSection(section: string) {
    this.sectionClick.emit(section);
    this.menuOpen.set(false);
  }
}

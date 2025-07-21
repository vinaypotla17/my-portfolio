import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
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

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}

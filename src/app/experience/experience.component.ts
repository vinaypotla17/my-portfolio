import { Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
})
export class ExperienceComponent {
  portfolioDataService = inject(PortfolioDataService);
  experience = this.portfolioDataService.experienceData;

  expanded: { [key: number]: boolean } = {};

  isExpanded(i: number) {
    return this.expanded[i];
  }

  toggle(i: number) {
    this.expanded[i] = !this.expanded[i];
  }
}

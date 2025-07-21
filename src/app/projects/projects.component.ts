import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
})
export class ProjectsComponent {
  portfolioDataService = inject(PortfolioDataService);
  projects = this.portfolioDataService.projectsData;
}

import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,
})
export class EducationComponent {
  portfolioDataService = inject(PortfolioDataService);
  education = this.portfolioDataService.educationData;
}

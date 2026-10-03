import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private portfolioDataService = inject(PortfolioDataService);
  heroData = this.portfolioDataService.heroData;
}

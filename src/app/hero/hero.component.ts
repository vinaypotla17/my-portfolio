import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
})
export class HeroComponent {
  portfolioDataService = inject(PortfolioDataService);
  heroData = this.portfolioDataService.heroData;
}

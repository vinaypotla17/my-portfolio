import { Component, computed, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
})
export class SkillsComponent {
  portfolioDataService = inject(PortfolioDataService);
  skills = this.portfolioDataService.skillsData;

  searchTerm = signal('');

  filteredSkills = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) {
      return this.skills();
    }

    const filtered: any = {};
    for (const key in this.skills()) {
      if (Object.prototype.hasOwnProperty.call(this.skills(), key)) {
        const skillsInSection = (this.skills() as any)[key];
        const filteredSkillsInSection = skillsInSection.filter((skill: any) =>
          skill.name.toLowerCase().includes(term)
        );
        if (filteredSkillsInSection.length > 0) {
          filtered[key] = filteredSkillsInSection;
        }
      }
    }
    return filtered;
  });

  onSearch(event: Event) {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }
}

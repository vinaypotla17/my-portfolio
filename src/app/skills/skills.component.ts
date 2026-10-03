import { Component, computed, inject, signal } from '@angular/core';
import { PortfolioDataService, SkillsMap } from '../portfolio-data.service';

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
  showAllSkills = signal(false);
  private readonly leadCategoryKeys = new Set(['cloud', 'backend', 'frontend', 'messaging']);

  filteredSkills = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) {
      return this.skills();
    }

    const filtered: SkillsMap = {};
    for (const [key, items] of Object.entries(this.skills())) {
      const matching = items.filter(skill => skill.name.toLowerCase().includes(term));
      if (matching.length > 0) {
        filtered[key] = matching;
      }
    }
    return filtered;
  });

  private readonly categoryOrder = [
    'cloud',
    'backend',
    'frontend',
    'devops',
    'database',
    'data',
    'messaging',
    'testing',
    'tools'
  ];

  private readonly categoryLabels: Record<string, string> = {
    cloud: 'Cloud Platforms',
    backend: 'Backend',
    frontend: 'Frontend',
    devops: 'DevOps & Infrastructure',
    database: 'Databases',
    data: 'Data & Observability',
    messaging: 'Messaging & Architecture',
    testing: 'Testing & Quality',
    tools: 'Tools & Practices'
  };

  skillCategories = computed(() => {
    const filtered = this.filteredSkills();
    const orderedKeys = [
      ...this.categoryOrder.filter(key => filtered[key]?.length),
      ...Object.keys(filtered).filter(key => !this.categoryOrder.includes(key) && filtered[key]?.length)
    ];

    return orderedKeys.map(key => ({
      key,
      label: this.categoryLabels[key] ?? key,
      skills: filtered[key]
    }));
  });

  visibleSkillCategories = computed(() => {
    const categories = this.skillCategories();
    if (this.showAllSkills() || this.searchTerm().trim()) {
      return categories;
    }
    return categories.filter(category => this.leadCategoryKeys.has(category.key));
  });

  onSearch(event: Event) {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }
}

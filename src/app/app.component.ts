import { Component, inject, signal } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ScrollableDirective } from './scrollable.directive';
import { SectionDirective } from './section.directive';
import { ThemeService } from './theme.service';
import { InteractiveZoneComponent } from './interactive-zone/interactive-zone.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    ScrollableDirective,
    SectionDirective,
    InteractiveZoneComponent
  ],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'portfolio';
  showAnimation = 'hide';
  activeSection = signal('hero');

  themeService = inject(ThemeService);

  onSectionChange(section: string) {
    this.activeSection.set(section);
  }
}

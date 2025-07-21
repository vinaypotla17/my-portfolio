import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  standalone: true,
})
export class TerminalComponent {
  portfolioDataService = inject(PortfolioDataService);
  lines: { type: 'input' | 'output'; content: string }[] = [];
  commandHistory: string[] = [];
  commandHistoryIndex = -1;

  ngOnInit() {
    this.lines.push({ type: 'output', content: 'Welcome to my interactive terminal! Type `help` for a list of commands.' });
  }

  onKeydown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      const command = input.value;
      this.handleCommand(command);
      input.value = '';
    } else if (event.key === 'ArrowUp') {
      if (this.commandHistoryIndex > 0) {
        this.commandHistoryIndex--;
        input.value = this.commandHistory[this.commandHistoryIndex];
      }
    } else if (event.key === 'ArrowDown') {
      if (this.commandHistoryIndex < this.commandHistory.length - 1) {
        this.commandHistoryIndex++;
        input.value = this.commandHistory[this.commandHistoryIndex];
      } else {
        input.value = '';
      }
    }
  }

  handleCommand(command: string) {
    this.lines.push({ type: 'input', content: command });
    this.commandHistory.push(command);
    this.commandHistoryIndex = this.commandHistory.length;

    const [cmd, ...args] = command.split(' ');

    switch (cmd) {
      case 'help':
        this.lines.push({ type: 'output', content: 'Available commands: help, ls, skills, cat' });
        break;
      case 'ls':
        this.lines.push({ type: 'output', content: 'about.md  experience.md  projects.md' });
        break;
      case 'skills':
        const skills = this.portfolioDataService.skillsData();
        let skillsOutput = '';
        for (const key in skills) {
          if (Object.prototype.hasOwnProperty.call(skills, key)) {
            skillsOutput += `\n${key.toUpperCase()}:\n`;
            (skills as any)[key].forEach((skill: any) => {
              skillsOutput += `  - ${skill.name}\n`;
            });
          } 
        }
        this.lines.push({ type: 'output', content: skillsOutput });
        break;
      case 'cat':
        const filename = args[0];
        if (filename === 'about.md') {
          this.lines.push({ type: 'output', content: this.portfolioDataService.heroData().summary });
        } else if (filename === 'experience.md') {
          let experienceOutput = '';
          this.portfolioDataService.experienceData().forEach(job => {
            experienceOutput += `\n## ${job.role} at ${job.company}\n`;
            experienceOutput += `*${job.period}, ${job.location}*\n`;
            job.responsibilities.forEach(res => {
              experienceOutput += `  - ${res}\n`;
            });
          });
          this.lines.push({ type: 'output', content: experienceOutput });
        } else if (filename === 'projects.md') {
          let projectsOutput = '';
          this.portfolioDataService.projectsData().forEach(project => {
            projectsOutput += `\n## ${project.name}\n`;
            projectsOutput += `${project.description}\n`;
          });
          this.lines.push({ type: 'output', content: projectsOutput });
        } else {
          this.lines.push({ type: 'output', content: `cat: ${filename}: No such file or directory` });
        }
        break;
      default:
        this.lines.push({ type: 'output', content: `command not found: ${command}` });
        break;
    }
  }
}

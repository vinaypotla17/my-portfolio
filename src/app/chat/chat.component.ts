import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ChatComponent {
  portfolioDataService = inject(PortfolioDataService);
  messages: { from: 'user' | 'bot'; text: string }[] = [];

  ngOnInit() {
    this.messages.push({ from: 'bot', text: 'Hello! I am a digital version of Vinay. Ask me anything about my skills, experience, or projects.' });
  }

  sendMessage(input: HTMLInputElement) {
    const message = input.value;
    if (message.trim()) {
      this.messages.push({ from: 'user', text: message });
      this.handleMessage(message);
      input.value = '';
    }
  }

  handleMessage(message: string) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('skill')) {
      this.handleSkillQuestion(lowerCaseMessage);
    } else if (lowerCaseMessage.includes('experience') || lowerCaseMessage.includes('role') || lowerCaseMessage.includes('company')) {
      this.handleExperienceQuestion(lowerCaseMessage);
    } else if (lowerCaseMessage.includes('project')) {
      this.handleProjectQuestion(lowerCaseMessage);
    } else if (lowerCaseMessage.includes('about')) {
      this.messages.push({ from: 'bot', text: this.portfolioDataService.heroData().summary });
    } else {
      this.messages.push({ from: 'bot', text: 'I am not sure how to answer that. Try asking about my skills, experience, or projects.' });
    }
  }

  handleSkillQuestion(message: string) {
    const skills = this.portfolioDataService.skillsData();
    let response = 'I have experience with the following skills:\n';

    for (const key in skills) {
      if (Object.prototype.hasOwnProperty.call(skills, key)) {
        const skillsInSection = (skills as any)[key];
        const matchingSkills = skillsInSection.filter((skill: any) => message.includes(skill.name.toLowerCase()));
        if (matchingSkills.length > 0) {
          response += `\n${key.toUpperCase()}:\n`;
          matchingSkills.forEach((skill: any) => {
            response += `  - ${skill.name}\n`;
          });
        }
      }
    }
    this.messages.push({ from: 'bot', text: response });
  }

  handleExperienceQuestion(message: string) {
    const experience = this.portfolioDataService.experienceData();
    let response = 'Here is some of my experience:\n';

    const matchingJobs = experience.filter(job => message.includes(job.company.toLowerCase()) || message.includes(job.role.toLowerCase()));

    if (matchingJobs.length > 0) {
      matchingJobs.forEach(job => {
        response += `\n## ${job.role} at ${job.company}\n`;
        response += `*${job.period}, ${job.location}*\n`;
        job.responsibilities.forEach(res => {
          response += `  - ${res}\n`;
        });
      });
    } else {
      response = 'I can provide details about my roles at Epsilon and Hoonuit. What would you like to know?';
    }
    this.messages.push({ from: 'bot', text: response });
  }

  handleProjectQuestion(message: string) {
    const projects = this.portfolioDataService.projectsData();
    let response = 'Here are some of my projects:\n';

    const matchingProjects = projects.filter(project => message.includes(project.name.toLowerCase()));

    if (matchingProjects.length > 0) {
      matchingProjects.forEach(project => {
        response += `\n## ${project.name}\n`;
        response += `${project.description}\n`;
      });
    } else {
      response = 'I have worked on projects involving real-time spam detection, predictive analytics, and a Twitter sentiment engine. Which one would you like to know more about?';
    }
    this.messages.push({ from: 'bot', text: response });
  }
}

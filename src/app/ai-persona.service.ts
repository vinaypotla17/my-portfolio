import { Injectable, inject } from '@angular/core';
import { PortfolioDataService } from './portfolio-data.service';

@Injectable({
  providedIn: 'root'
})
export class AiPersonaService {
  private portfolioData = inject(PortfolioDataService);
  private context: { topic: string | null, subject: any | null } = { topic: null, subject: null };

  getResponse(message: string): string {
    const lowerCaseMessage = message.toLowerCase();

    // Basic intent detection
    if (lowerCaseMessage.includes('thank')) {
      return 'You\'re welcome! Is there anything else I can help you with?';
    }

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hello there! How can I tell you more about my work?';
    }

    // More complex intent detection
    const topic = this.getTopic(lowerCaseMessage);

    if (topic === 'skills') {
      return this.generateSkillResponse(lowerCaseMessage);
    }

    if (topic === 'experience') {
      return this.generateExperienceResponse(lowerCaseMessage);
    }

    if (topic === 'projects') {
      return this.generateProjectResponse(lowerCaseMessage);
    }

    if (topic === 'education') {
      return this.generateEducationResponse();
    }

    if (lowerCaseMessage.includes('tell me more') && this.context.topic) {
      return this.generateFollowUpResponse();
    }

    return 'That\'s a great question. I can tell you about my skills, experience, projects, and education. What would you like to know?';
  }

  private getTopic(message: string): string | null {
    if (message.includes('skill') || message.includes('proficient') || message.includes('know about')) return 'skills';
    if (message.includes('experience') || message.includes('work') || message.includes('role') || message.includes('company')) return 'experience';
    if (message.includes('project') || message.includes('built') || message.includes('created')) return 'projects';
    if (message.includes('education') || message.includes('degree') || message.includes('school')) return 'education';
    return null;
  }

  private generateSkillResponse(message: string): string {
    const skills = this.portfolioData.skillsData();
    const allSkills: {name: string, category: string}[] = [];
    Object.keys(skills).forEach(key => {
      (skills as any)[key].forEach((skill: any) => allSkills.push({ name: skill.name, category: key }));
    });

    const mentionedSkills = allSkills.filter(skill => message.includes(skill.name.toLowerCase()));

    if (mentionedSkills.length > 0) {
      this.context = { topic: 'skills', subject: mentionedSkills };
      const skillNames = mentionedSkills.map(s => s.name).join(', ');
      return `I'm glad you asked about ${skillNames}. I have used these in several of my projects. For example, in my work at Epsilon, I heavily used Angular and TypeScript to build a modern messaging platform.`;
    }

    return 'I have a wide range of skills across the full stack. Are you interested in my frontend, backend, or DevOps skills?';
  }

  private generateExperienceResponse(message: string): string {
    const experience = this.portfolioData.experienceData();
    const mentionedCompanies = experience.filter(job => message.includes(job.company.toLowerCase()));

    if (mentionedCompanies.length > 0) {
      this.context = { topic: 'experience', subject: mentionedCompanies[0] };
      const job = mentionedCompanies[0];
      return `At ${job.company}, my role as a ${job.role} was really rewarding. One of my key achievements was ${job.responsibilities[0]}. I can tell you more if you'd like.`;
    }

    return 'I have had some great experiences at companies like Epsilon and Hoonuit, where I was able to contribute to some exciting projects. Which role would you like to hear about?';
  }

  private generateProjectResponse(message: string): string {
    const projects = this.portfolioData.projectsData();
    const mentionedProjects = projects.filter(p => message.includes(p.name.toLowerCase().split(' ')[0]));

    if (mentionedProjects.length > 0) {
      this.context = { topic: 'projects', subject: mentionedProjects[0] };
      const project = mentionedProjects[0];
      return `The ${project.name} project was a great learning experience. ${project.description} Would you like to know more about the tech I used?`;
    }

    return 'I have worked on a few interesting projects, including a real-time spam detector and a predictive analytics engine. Which one piques your interest?';
  }

  private generateEducationResponse(): string {
    const education = this.portfolioData.educationData();
    this.context = { topic: 'education', subject: education };
    return `I have a Master's degree in Computer Science from The University of Texas at Dallas and a Bachelor's in Electrical Engineering from NIT Calicut. I really enjoyed my time at both universities.`;
  }

  private generateFollowUpResponse(): string {
    if (this.context.topic === 'experience') {
      const job = this.context.subject;
      return `Of course. While at ${job.company}, another thing I worked on was ${job.responsibilities[1]}. It was a challenging but rewarding task.`;
    }
    // Add more follow-up logic for other topics here
    return 'Could you be more specific? I can tell you more about my skills, experience, or projects.';
  }
}

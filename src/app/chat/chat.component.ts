import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AiPersonaService } from '../ai-persona.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ChatComponent {
  private aiPersona = inject(AiPersonaService);
  @ViewChild('messageContainer') private messageContainer?: ElementRef<HTMLElement>;

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
    this.messages.push({ from: 'bot', text: this.aiPersona.getResponse(message) });
    setTimeout(() => {
      const container = this.messageContainer?.nativeElement;
      container?.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    });
  }
}

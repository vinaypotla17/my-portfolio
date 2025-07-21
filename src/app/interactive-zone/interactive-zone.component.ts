import { Component, signal } from '@angular/core';
import { TerminalComponent } from '../terminal/terminal.component';
import { ChatComponent } from '../chat/chat.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interactive-zone',
  templateUrl: './interactive-zone.component.html',
  styleUrls: ['./interactive-zone.component.scss'],
  standalone: true,
  imports: [TerminalComponent, ChatComponent, CommonModule]
})
export class InteractiveZoneComponent {
  activeTab = signal<'terminal' | 'chat'>('terminal');

  setTab(tab: 'terminal' | 'chat') {
    this.activeTab.set(tab);
  }
}

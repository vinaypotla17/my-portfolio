import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appSection]',
  standalone: true,
})
export class SectionDirective {
  @Output() sectionChange = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    // A section is active if its top is within 150px of the top of the viewport.
    if (rect.top <= 150 && rect.bottom >= 150) {
      this.sectionChange.emit(this.el.nativeElement.id);
    }
  }
}

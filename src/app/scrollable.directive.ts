import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollable]',
  standalone: true,
})
export class ScrollableDirective {
  @Output() scrolled = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      this.scrolled.emit();
    }
  }
}

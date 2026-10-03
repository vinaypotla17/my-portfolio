import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[appSection]',
  standalone: true,
})
export class SectionDirective implements AfterViewInit, OnDestroy {
  @Output() sectionChange = new EventEmitter<string>();
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.sectionChange.emit(this.el.nativeElement.id);
      }
    }, { rootMargin: '-10% 0px -70% 0px' });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter skills by name', () => {
    component.onSearch({ target: { value: 'Angular' } } as unknown as Event);

    expect(component.filteredSkills()['frontend']).toEqual([
      jasmine.objectContaining({ name: 'Angular' })
    ]);
    expect(component.filteredSkills()['backend']).toBeUndefined();
  });
});

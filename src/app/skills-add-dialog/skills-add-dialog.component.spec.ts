import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAddDialogComponent } from './skills-add-dialog.component';

describe('SkillsAddDialogComponent', () => {
  let component: SkillsAddDialogComponent;
  let fixture: ComponentFixture<SkillsAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

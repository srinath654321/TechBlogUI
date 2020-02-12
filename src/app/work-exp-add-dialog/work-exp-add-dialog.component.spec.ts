import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpAddDialogComponent } from './work-exp-add-dialog.component';

describe('WorkExpAddDialogComponent', () => {
  let component: WorkExpAddDialogComponent;
  let fixture: ComponentFixture<WorkExpAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExpAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExpAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

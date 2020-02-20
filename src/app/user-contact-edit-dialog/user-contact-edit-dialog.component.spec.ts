import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactEditDialogComponent } from './user-contact-edit-dialog.component';

describe('UserContactEditDialogComponent', () => {
  let component: UserContactEditDialogComponent;
  let fixture: ComponentFixture<UserContactEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContactEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

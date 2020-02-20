import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAboutEditDialogComponent } from './user-about-edit-dialog.component';

describe('UserAboutEditDialogComponent', () => {
  let component: UserAboutEditDialogComponent;
  let fixture: ComponentFixture<UserAboutEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAboutEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAboutEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

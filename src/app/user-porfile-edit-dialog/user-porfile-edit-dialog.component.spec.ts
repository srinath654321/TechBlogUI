import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPorfileEditDialogComponent } from './user-porfile-edit-dialog.component';

describe('UserPorfileEditDialogComponent', () => {
  let component: UserPorfileEditDialogComponent;
  let fixture: ComponentFixture<UserPorfileEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPorfileEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPorfileEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsAddComponent } from './certifications-add.component';

describe('CertificationsAddComponent', () => {
  let component: CertificationsAddComponent;
  let fixture: ComponentFixture<CertificationsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

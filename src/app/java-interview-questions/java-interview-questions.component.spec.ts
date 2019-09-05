import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaInterviewQuestionsComponent } from './java-interview-questions.component';

describe('JavaInterviewQuestionsComponent', () => {
  let component: JavaInterviewQuestionsComponent;
  let fixture: ComponentFixture<JavaInterviewQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaInterviewQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaInterviewQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

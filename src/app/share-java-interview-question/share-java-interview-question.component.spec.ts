import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareJavaInterviewQuestionComponent } from './share-java-interview-question.component';

describe('ShareJavaInterviewQuestionComponent', () => {
  let component: ShareJavaInterviewQuestionComponent;
  let fixture: ComponentFixture<ShareJavaInterviewQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareJavaInterviewQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareJavaInterviewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

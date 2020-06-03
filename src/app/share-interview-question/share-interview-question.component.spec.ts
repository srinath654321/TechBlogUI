import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareInterviewQuestionComponent } from './share-interview-question.component';

describe('ShareJavaInterviewQuestionComponent', () => {
  let component: ShareInterviewQuestionComponent;
  let fixture: ComponentFixture<ShareInterviewQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareInterviewQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareInterviewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

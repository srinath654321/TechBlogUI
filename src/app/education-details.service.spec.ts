import { TestBed } from '@angular/core/testing';

import { EducationDetailsService } from './education-details.service';

describe('EducationDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducationDetailsService = TestBed.get(EducationDetailsService);
    expect(service).toBeTruthy();
  });
});

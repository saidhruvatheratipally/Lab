import { TestBed } from '@angular/core/testing';

import { ApiStudentServiceService } from './api-student-service.service';

describe('ApiStudentServiceService', () => {
  let service: ApiStudentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStudentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

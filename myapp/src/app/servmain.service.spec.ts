import { TestBed } from '@angular/core/testing';

import { ServmainService } from './servmain.service';

describe('ServmainService', () => {
  let service: ServmainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServmainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DarkLightService } from './dark-light.service';

describe('DarkLightService', () => {
  let service: DarkLightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkLightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

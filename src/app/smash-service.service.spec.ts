import { TestBed } from '@angular/core/testing';

import { SmashServiceService } from './smash-service.service';

describe('SmashServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmashServiceService = TestBed.get(SmashServiceService);
    expect(service).toBeTruthy();
  });
});

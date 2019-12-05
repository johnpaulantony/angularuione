import { TestBed } from '@angular/core/testing';

import { TraineeserviceService } from './traineeservice.service';

describe('TraineeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraineeserviceService = TestBed.get(TraineeserviceService);
    expect(service).toBeTruthy();
  });
});

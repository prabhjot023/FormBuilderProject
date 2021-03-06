import { TestBed } from '@angular/core/testing';

import { Module2ServiceService } from './module2-service.service';

describe('Module2ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Module2ServiceService = TestBed.get(Module2ServiceService);
    expect(service).toBeTruthy();
  });
});

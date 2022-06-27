import { TestBed } from '@angular/core/testing';

import { AbstractFactoryService } from './abstract-factory.service';

describe('AbstractFactoryService', () => {
  let service: AbstractFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommServiceService } from './comm-service.service';

describe('Service: CommService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommServiceService]
    });
  });

  it('should ...', inject([CommServiceService], (service: CommServiceService) => {
    expect(service).toBeTruthy();
  }));
});

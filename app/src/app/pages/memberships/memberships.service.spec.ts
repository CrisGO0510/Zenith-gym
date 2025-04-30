/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MembershipsService } from './memberships.service';

describe('Service: Memberships', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembershipsService]
    });
  });

  it('should ...', inject([MembershipsService], (service: MembershipsService) => {
    expect(service).toBeTruthy();
  }));
});

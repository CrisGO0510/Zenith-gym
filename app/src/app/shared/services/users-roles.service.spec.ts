/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersRolesService } from './users-roles.service';

describe('Service: UsersRoles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersRolesService]
    });
  });

  it('should ...', inject([UsersRolesService], (service: UsersRolesService) => {
    expect(service).toBeTruthy();
  }));
});

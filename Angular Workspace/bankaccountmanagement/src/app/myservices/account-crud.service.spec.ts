import { TestBed } from '@angular/core/testing';

import { AccountCRUDService } from './account-crud.service';

describe('AccountCRUDService', () => {
  let service: AccountCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

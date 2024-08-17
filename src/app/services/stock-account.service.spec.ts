import { TestBed } from '@angular/core/testing';

import { StockAccountService } from './stock-account.service';

describe('StockAccountService', () => {
  let service: StockAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

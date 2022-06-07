import { TestBed } from '@angular/core/testing';

import { BankProxyService } from './bank-proxy.service';

describe('BankProxyService', () => {
  let service: BankProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

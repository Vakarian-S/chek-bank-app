import { TestBed } from '@angular/core/testing';

import { TransactionProxyService } from './transaction-proxy.service';

describe('TransactionProxyService', () => {
  let service: TransactionProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

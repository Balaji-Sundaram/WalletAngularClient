import { TestBed } from '@angular/core/testing';

import { WalletDbServiceService } from './wallet-db-service.service';

describe('WalletDbServiceService', () => {
  let service: WalletDbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletDbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

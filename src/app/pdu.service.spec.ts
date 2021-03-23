import { TestBed } from '@angular/core/testing';

import { PduService } from './pdu.service';

describe('PduService', () => {
  let service: PduService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PduService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

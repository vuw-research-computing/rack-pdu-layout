import { TestBed } from '@angular/core/testing';

import { ServerImportService } from './server-import.service';

describe('ServerImportService', () => {
  let service: ServerImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

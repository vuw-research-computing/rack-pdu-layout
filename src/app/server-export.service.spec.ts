import { TestBed } from '@angular/core/testing';

import { ServerExportService } from './server-export.service';

describe('ServerExportService', () => {
  let service: ServerExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

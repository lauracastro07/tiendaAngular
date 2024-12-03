import { TestBed } from '@angular/core/testing';

import { AudiclienteService } from './audicliente.service';

describe('AudiclienteService', () => {
  let service: AudiclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudiclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

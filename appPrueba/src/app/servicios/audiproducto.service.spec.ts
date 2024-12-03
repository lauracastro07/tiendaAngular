import { TestBed } from '@angular/core/testing';

import { AudiproductoService } from './audiproducto.service';

describe('AudiproductoService', () => {
  let service: AudiproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudiproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

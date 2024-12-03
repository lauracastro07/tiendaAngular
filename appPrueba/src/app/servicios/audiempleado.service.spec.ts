import { TestBed } from '@angular/core/testing';

import { AudiempleadoService } from './audiempleado.service';

describe('AudiempleadoService', () => {
  let service: AudiempleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudiempleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

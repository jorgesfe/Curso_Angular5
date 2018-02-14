import { TestBed, inject } from '@angular/core/testing';

import { ServicioComponente1Service } from './servicio-componente1.service';

describe('ServicioComponente1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioComponente1Service]
    });
  });

  it('should be created', inject([ServicioComponente1Service], (service: ServicioComponente1Service) => {
    expect(service).toBeTruthy();
  }));
});

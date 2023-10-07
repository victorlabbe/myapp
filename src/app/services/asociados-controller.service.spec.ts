import { TestBed } from '@angular/core/testing';

import { AsociadosControllerService } from './asociados-controller.service';

describe('AsociadosControllerService', () => {
  let service: AsociadosControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsociadosControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

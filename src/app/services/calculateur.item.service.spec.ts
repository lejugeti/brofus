import { TestBed } from '@angular/core/testing';

import { Calculateur.ItemService } from './calculateur.item.service';

describe('Calculateur.ItemService', () => {
  let service: Calculateur.ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calculateur.ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

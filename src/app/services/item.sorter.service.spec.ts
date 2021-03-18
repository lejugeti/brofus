import { TestBed } from '@angular/core/testing';

import { Item.SorterService } from './item.sorter.service';

describe('Item.SorterService', () => {
  let service: Item.SorterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Item.SorterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

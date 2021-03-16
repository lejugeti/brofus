import { TestBed } from '@angular/core/testing';

import { FormatItemService } from './format.item.service';

describe('Format.ItemService', () => {
  let service: FormatItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

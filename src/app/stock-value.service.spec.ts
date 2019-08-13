import { TestBed, inject } from '@angular/core/testing';

import { StockValueService } from './stock-value.service';

describe('StockValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockValueService]
    });
  });

  it('should be created', inject([StockValueService], (service: StockValueService) => {
    expect(service).toBeTruthy();
  }));
});

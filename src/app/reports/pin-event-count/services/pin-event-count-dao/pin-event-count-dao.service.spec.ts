import { TestBed, inject } from '@angular/core/testing';

import { PinEventCountDaoService } from './pin-event-count-dao.service';

describe('PinEventCountDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PinEventCountDaoService]
    });
  });

  it('should ...', inject([PinEventCountDaoService], (service: PinEventCountDaoService) => {
    expect(service).toBeTruthy();
  }));
});

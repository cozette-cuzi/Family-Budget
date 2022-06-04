import { TestBed } from '@angular/core/testing';

import { BudgetEntryService } from './budget-entry.service';

describe('BudgetEntryService', () => {
  let service: BudgetEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

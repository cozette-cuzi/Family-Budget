import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntriesListComponent } from './budget-entries-list.component';

describe('BudgetEntriesListComponent', () => {
  let component: BudgetEntriesListComponent;
  let fixture: ComponentFixture<BudgetEntriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetEntriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

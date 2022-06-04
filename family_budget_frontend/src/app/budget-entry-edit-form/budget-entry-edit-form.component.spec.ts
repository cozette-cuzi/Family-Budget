import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntryEditFormComponent } from './budget-entry-edit-form.component';

describe('BudgetEntryEditFormComponent', () => {
  let component: BudgetEntryEditFormComponent;
  let fixture: ComponentFixture<BudgetEntryEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntryEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetEntryEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

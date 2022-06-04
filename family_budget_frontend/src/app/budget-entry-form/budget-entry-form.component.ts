import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { BudgetEntry } from '../budget-entry';

@Component({
  selector: 'app-budget-entry-form',
  templateUrl: './budget-entry-form.component.html',
  styleUrls: ['./budget-entry-form.component.css']
})
export class BudgetEntryFormComponent implements OnInit, OnChanges {
  @Input() budgetEntry = null;
  @Output() save = new EventEmitter<BudgetEntry>();

  budgetEntryForm = this.fb.group({
    title: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    category: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  get title(): AbstractControl {
    return this.budgetEntryForm.get('title');
  }
  get amount(): AbstractControl {
    return this.budgetEntryForm.get('amount');
  }
  get category(): AbstractControl {
    return this.budgetEntryForm.get('category');
  }
  

  ngOnInit(): void {
    console.log(this.budgetEntry)
  }

  ngOnChanges(): void {
    this.budgetEntryForm.patchValue(this.budgetEntry);
  }

  onSubmit(): void {
    if (this.budgetEntryForm.valid) {
      this.save.emit(this.budgetEntryForm.value);
    }
  }
}

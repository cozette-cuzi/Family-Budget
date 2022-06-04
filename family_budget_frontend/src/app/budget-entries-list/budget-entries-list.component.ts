import { Component, OnInit } from '@angular/core';
import { BudgetEntry } from '../budget-entry';
import { BudgetEntryService } from '../budget-entry.service';

@Component({
  selector: 'app-budget-entries-list',
  templateUrl: './budget-entries-list.component.html',
  styleUrls: ['./budget-entries-list.component.css']
})
export class BudgetEntriesListComponent implements OnInit {

  budgetEntries: BudgetEntry[] = [];
  selectedBudgetEntry: BudgetEntry | null = null;

  constructor(private budgetEntryService: BudgetEntryService) {}

  async ngOnInit(): Promise<void> {
    this.budgetEntries = await this.budgetEntryService.getBudgetEntries();
    console.log(this.budgetEntries);
  }


  handleSave(budgetEntry: any): void {
    Object.assign(this.selectedBudgetEntry, budgetEntry);
    this.selectedBudgetEntry = null;
  }

}

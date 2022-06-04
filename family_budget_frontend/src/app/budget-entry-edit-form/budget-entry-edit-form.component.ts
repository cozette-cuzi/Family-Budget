import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetEntry } from '../budget-entry';
import { BudgetEntryService } from '../budget-entry.service';

@Component({
  selector: 'app-budget-entry-edit-form',
  templateUrl: './budget-entry-edit-form.component.html',
  styleUrls: ['./budget-entry-edit-form.component.css']
})
export class BudgetEntryEditFormComponent implements OnInit {

  budgetEntry = new BudgetEntry();

  constructor(
    private route: ActivatedRoute,
    private budgetEntryService: BudgetEntryService,
    private location: Location,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.budgetEntry = await this.budgetEntryService.getBudgetEntry(+id);
    }
  }

  async handleSave(budgetEntry: BudgetEntry): Promise<void> {
    if (this.budgetEntry.id) {
      await this.budgetEntryService.updateBudgetEntry(this.budgetEntry.id, budgetEntry);
      this.location.back();
    } else {
      await this.budgetEntryService.addBudgetEntry(budgetEntry);
      this.router.navigate(['/budget-entries-list']);
    }
  }

}

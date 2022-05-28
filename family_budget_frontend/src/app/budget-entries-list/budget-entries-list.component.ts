import { Component, OnInit } from '@angular/core';
import { BudgetEntry } from '../budget-entry';

@Component({
  selector: 'app-budget-entries-list',
  templateUrl: './budget-entries-list.component.html',
  styleUrls: ['./budget-entries-list.component.css']
})
export class BudgetEntriesListComponent implements OnInit {

  public budget_entries : BudgetEntry[] = [
    {id: 1, title: 'salary', amount: 2000, category: 'INCOME'},
    {id: 2, title: 'shopping', amount: 200, category: 'OUTCOME'},
    {id: 3, title: 'grosery', amount: 150, category: 'OUTCOME'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

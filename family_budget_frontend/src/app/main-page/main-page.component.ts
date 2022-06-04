import { Component, OnInit } from '@angular/core';
import { BudgetEntryService } from '../budget-entry.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public balance : number = 0;

  constructor(
    private budgetEntryService: BudgetEntryService,
  ) {}

  async ngOnInit() {
    this.balance = await this.budgetEntryService.getBalance();
    console.log(this.balance);
  }

}

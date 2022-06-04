import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { BudgetEntry } from './budget-entry';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class BudgetEntryService {

  private budgetEntryURL = 'http://localhost:8000/api/budget-entry';

  constructor(private http: HttpClient) {}

  public async getBudgetEntries(): Promise<BudgetEntry[]> {
    return await lastValueFrom(this.http.get<BudgetEntry[]>(this.budgetEntryURL, httpOptions));
  }

  public async getBudgetEntry(id: number): Promise<BudgetEntry> {
    return await lastValueFrom(this.http.get<BudgetEntry>(`${this.budgetEntryURL}/${id}`, httpOptions));
  }

  public async updateBudgetEntry(id: number, editedBudgetEntry: BudgetEntry): Promise<BudgetEntry> {
    return await lastValueFrom(this.http.patch<BudgetEntry>(`${this.budgetEntryURL}/${id}`, editedBudgetEntry, httpOptions));
  }

  public async addBudgetEntry(newBudgetEntry: BudgetEntry): Promise<BudgetEntry> {
    return await lastValueFrom(this.http.post<BudgetEntry>(this.budgetEntryURL, newBudgetEntry, httpOptions));
  }

  public async getBalance(): Promise<number> {
    return await lastValueFrom(this.http.get<number>(this.budgetEntryURL+ '/balance', httpOptions));
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetEntriesListComponent } from './budget-entries-list/budget-entries-list.component';
import { BudgetEntryFormComponent } from './budget-entry-form/budget-entry-form.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "budget-entries-list",
    component: BudgetEntriesListComponent
  },
  {
    path: "new-budget-entry",
    component: BudgetEntryFormComponent
  },
  {
    path: "about",
    component: MainPageComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BudgetEntriesListComponent } from './budget-entries-list/budget-entries-list.component';
import { BudgetEntryEditFormComponent } from './budget-entry-edit-form/budget-entry-edit-form.component';
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
    component: BudgetEntryEditFormComponent
  },
  {
    path: "budget-entry/:id/edit",
    component: BudgetEntryEditFormComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}

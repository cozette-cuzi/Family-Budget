import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BudgetEntryFormComponent } from './budget-entry-form/budget-entry-form.component';
import { BudgetEntriesListComponent } from './budget-entries-list/budget-entries-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IconsModule } from './icons/icons.module';
import { BudgetEntryEditFormComponent } from './budget-entry-edit-form/budget-entry-edit-form.component';
import { HttpClientModule } from "@angular/common/http";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent,
    BudgetEntryFormComponent,
    BudgetEntriesListComponent,
    BudgetEntryEditFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    IconsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

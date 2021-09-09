import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {RouterModule} from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterComponent,
  ],
    imports: [
        BrowserModule, RouterModule, ReactiveFormsModule, FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

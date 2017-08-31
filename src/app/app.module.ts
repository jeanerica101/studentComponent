import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { InsertStudentComponent } from './insert-student/insert-student.component';
import { PrintingComponent } from './printing/printing.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    InsertStudentComponent,
    PrintingComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

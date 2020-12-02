import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateCellEditorComponent } from './date-cell-editor/date-cell-editor.component';

@NgModule({
  declarations: [AppComponent, DateCellEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

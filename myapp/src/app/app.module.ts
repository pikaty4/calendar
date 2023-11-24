import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './base/table/table.component';
import { DatapickerComponent } from './datapicker/datapicker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CalendarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatapickerComponent,
    BrowserAnimationsModule,
    DialogComponent
    
    	
     
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

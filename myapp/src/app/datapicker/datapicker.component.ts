import {Component, EventEmitter, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ServmainService } from '../servmain.service';


@Component({
  selector: 'app-datapicker',
  templateUrl: './datapicker.component.html',
  styleUrls: ['./datapicker.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
})
export class DatapickerComponent {
   
 /* function() {
    console.log(event)
  }*/
  /*public onChange(event: any): void {
    console.log(event.target.value);
    // this.getData(newDate);
  }*/
  b: any;
  a: any;
  c: any;
  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    console.log(dateRangeStart.value);
    console.log(dateRangeEnd.value);
    console.log(dateRangeEnd);
    this.b = dateRangeEnd.value.toString() 
    this.a = dateRangeStart.value.toString()
    this.a = this.a.slice(3,5);
    this.b = this.b.slice(3,5);
    this.c = this.b - this.a;
    console.log(this.b - this.a);
    console.log(this.a);
    console.log(this.b);
    this.setAnyCount();
  }

  constructor(
    private readonly simpleService: ServmainService
    
) {}

public setAnyCount(): void {
this.simpleService.changeCount(this.a, this.b,this.c);
}


}

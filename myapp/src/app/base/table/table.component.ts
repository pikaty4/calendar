import { Component, HostListener } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {formatDate} from '@angular/common';
import { DatapickerComponent } from 'src/app/datapicker/datapicker.component';
import { ServmainService } from 'src/app/servmain.service';
import { Calendar } from 'igniteui-angular';
import { CalendarComponent } from 'src/app/calendar/calendar.component';
import { count } from 'rxjs';
import { range } from 'lodash';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  
})  
export class TableComponent {
  range = range;
  midle: number;
  first: number;
  second: number;
  nowDate = new Date;
  nowDay = this.nowDate.getDate();
  needDate = new Date();
 year = this.needDate.getFullYear();
 month = this.needDate.getMonth() + 1;
 daysInMonth = new Date(this.year, this.month, 0).getDate();
 shouldChangeColor: boolean = false;
  list: number[] = [];
  count: number;
 


  
  
  constructor(
    private readonly simpleService: ServmainService
 ) {}

 ngOnInit(): void {
   this.simpleService.startDate$.subscribe((count) => this.log(count));
   this.simpleService.endDate$.subscribe((count) => this.log(count));
   this.simpleService.midleDate$.subscribe((count) => this.log(count));
   this.simpleService.midleDate$.subscribe((count) => this.getMidle(count));
   this.simpleService.startDate$.subscribe((count) => { this.getFirst(count);
    this.getRange(this.first,this.second);
    this.list[0] = this.first;
    });
    
    

   this.simpleService.endDate$.subscribe((count) => {this.getSecond(count);
  
  this.list[1] = this.second;
   this.list =this.getRange(this.first,this.second);
  console.log(this.list)});
  console.log(this.list)
   
   console.log(this.nowDay)
   
   
   
  
   
 }


 private log(data: string): void {
   console.log(data);
  
   
 }
 private getMidle(date:string):void{
  this.midle = +date;
  
  console.log(this.midle);
 }



 
 private getFirst(date:string):number{
  this.first = +date;
  return this.first;
 }
 private getSecond(date:string):number{
  this.second = +date;
  return this.second;
 }

 public getRange(n: number, m: number): number[] {
  return Array.from({ length: m - n + 1 }, (_, i) => n + i);
}
  buton = true;
  func(){
    
    this.buton = !this.buton;
    return this.buton;
  }
  currentDate = new Date();
  
}


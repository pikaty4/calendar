import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class  CalendarComponent implements OnInit {
  date = new Date()
  day = this.date.getDate()
  
  list: number[] =[this.day]
  
   currentDate = new Date();
     currentMonth = this.currentDate.getMonth();
     nextMonth = this.currentMonth + 1;
     nextMonthFirstDay = new Date(this.currentDate.getFullYear(), this.nextMonth, 1);
     lastDay = new Date(this.nextMonthFirstDay.getTime() - 1);
     
    
  
  

ngOnInit(){
  this.setDate()
}



  public setDate(){     
      this.day += 1;
      console.log(this.day)
      
      
  }
  lists = Array.from({ length: this.lastDay.getDate() }, (_, i) => i + 1);
  filteredDays = this.lists.filter(day => day >= this.day);
  
}



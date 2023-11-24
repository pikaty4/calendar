import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServmainService {
	public midleDate$ = new Subject<string>();
public startDate$ = new Subject<string>();
public endDate$ = new Subject<string>();

		public changeCount(count: string, count2: string, count3:any) {
   		this.startDate$.next(count); 
      this.endDate$.next(count2);
	  this.midleDate$.next(count3);	
	  
  	}
}

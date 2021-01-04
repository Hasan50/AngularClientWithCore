import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class EventEmitterService {
  isDashboardUpdate = false; 


  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

   emitDashboaordUpdate(values : boolean) {
    this.isDashboardUpdate = values;
    this.change.emit(this.isDashboardUpdate);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map'

@Injectable()
export class AttendanceService {

  constructor(private http: HttpClient, private config: AppConfig) {
  }

  public GetAttendanceFeed() {
    return this.http.get<any>(this.config.apiUrl + 'AttendanceApi/GetAttendanceFeed');
  }
  public GetEmployeeAttendanceFeedWithDate(userId, startdate, enddate) {
    return this.http.get<any>(this.config.apiUrl + 'AttendanceApi/GetEmployeeAttendanceFeedWithDate?userId='+ userId + '&startdate=' + startdate + '&enddate=' + enddate);
  }
  public GetAllEmployeeAttendance( startdate, enddate) {
    return this.http.get<any>(this.config.apiUrl + 'AttendanceApi/GetAllEmployeeAttendance?startdate=' + startdate + '&enddate=' + enddate);
  }

  public GetMonthlyAttendance(monthName, year) {
    return this.http.get<any>(this.config.apiUrl + 'AttendanceApi/GetAllEmployeeAttendanceWithMonth?month=' + monthName + '&year=' + year);
  }

  public GetMonthlyAttendanceDetails(userId,monthName, year) {
    return this.http.get<any>(this.config.apiUrl + 'AttendanceApi/GetMonthlyAttendanceDetails?userId='+userId+ '&month=' + monthName + '&year=' + year);

  }
  public GetMovementDetails(userId) {
    return this.http.get<any>(this.config.apiUrl + 'AttendanceApi/GetMovementDetails?userId='+userId);
  }
  public GetMovementDetailsAll() {
    return this.http.get<any>(this.config.apiUrl + 'AttendanceApi/GetMovementDetailsAll');
  }

}

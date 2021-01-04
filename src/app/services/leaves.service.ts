import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map'

@Injectable()
export class LeavesService {
    
   constructor(private http: HttpClient, private config: AppConfig) {
    }

   public GetAllEmployeeLeave() {
        const action = 'LeaveApi/GetLeave';
        return  this.http.get(this.config.apiUrl + action);
    }
    public GetApprovedLeave() {
        const action = 'LeaveApi/GetApprovedLeave';
        return  this.http.get(this.config.apiUrl + action);
    }
    public GetRejectedLeave() {
        const action = 'LeaveApi/GetRejectedLeave';
        return  this.http.get(this.config.apiUrl + action);
    }
    public GetPendingLeave() {
        const action = 'LeaveApi/GetPendingLeave';
        return  this.http.get(this.config.apiUrl + action);
    }
        
    public LeaveApproved(id: Int16Array, userId:string) {
        return this.http.get<any>(this.config.apiUrl + 'LeaveApi/Approved?id=' + id+"&userId="+userId);
      }

    public LeaveRejected(id: Int16Array) {
        return this.http.get<any>(this.config.apiUrl + 'LeaveApi/Rejected?id=' + id);
    }
    public GetLeaveWithDateRange(startdate, enddate) {
        console.log('api');
        return this.http.get<any>(this.config.apiUrl + 'LeaveApi/GetLeaveWithDateRange?startDate=' + startdate + '&endDate=' + enddate);
      } 
      public GetApprovedLeaveDateRange(startdate, enddate) {
        console.log('api');
        return this.http.get<any>(this.config.apiUrl + 'LeaveApi/GetApprovedLeaveDateRange?startDate=' + startdate + '&endDate=' + enddate);
      } 
      public GetLeaveTypeList() {
        const action = 'LeaveApi/GetLeaveTypeList';
        return  this.http.get(this.config.apiUrl + action);
    }   
}

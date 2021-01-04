import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map'

@Injectable()
export class ClaimService
{

  constructor(private http: HttpClient, private config: AppConfig)
  {

  }


  public GetAssignedToMeTasks(userId: string)
  {
    return this.http.get<any>(this.config.apiUrl + 'ClaimApi/GetAssignedToMeTasks?userId=' + userId);
  }


  public GetCreatedByMeTasks(id: string)
  {
    return this.http.get<any>(this.config.apiUrl + 'ClaimApi/GetCreatedByMeTasks?userId=' + id);
  }

  public GetRelatedToMeTasks(id: string)
  {
    return this.http.get<any>(this.config.apiUrl + 'ClaimApi/GetRelatedToMeTasks?userId=' + id);
  }
  public GetClaim()
  {
    return this.http.get<any>(this.config.apiUrl + 'ClaimApi/GetClaim');
  }
  public ClaimApproved(id: any) {
    console.log(id);
    return this.http.get<any>(this.config.apiUrl + 'ClaimApi/Approved?id=' + id);
  }
  public GetClaimWithMonth(month,year)
  {
    return this.http.get<any>(this.config.apiUrl + 'ClaimApi/GetClaimWithMonth?month='+month+'&year='+year);
  }

  // public GetTaskDetails(id: string)
  // {
  //   return this.http.get<any>(this.config.apiUrl + 'ClaimApi/GetTaskDetails?id=' + id);
  // }
  public CreateClaim(aModel)
  {
    return this.http.post<any>(this.config.apiUrl + 'ClaimApi/AddOrUpdate', aModel);
  }
  public GetStatusList()
  {
    return this.http.get<any>(this.config.apiUrl + 'ClaimApi/GetStatusList');
  }
  public deleteClaim(id: string)
  {
    return this.http.get<any>(this.config.apiUrl + 'ClaimApi/DeleteClaim?id=' + id);
  }
  // public GetPriorityList()
  // {
  //   return this.http.get<any>(this.config.apiUrl + 'ClaimApi/GetPriorityList');
  // }
  // public GetAssignToList()
  // {
  //   return this.http.get<any>(this.config.apiUrl + 'ClaimApi/GetEmployeeAsTextValue');
  // }

  // public GetTaskAttachments(id: string)
  // {
  //   return this.http.get<any>(this.config.apiUrl + 'ClaimApi/GetTaskAttachments?taskId=' + id);
  // }
  public Upload(aModel)
  {
    return this.http.post<any>(this.config.apiUrl + 'AzureFileStorageApi/Upload', aModel);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map'

@Injectable()
export class TasksService
{

  constructor(private http: HttpClient, private config: AppConfig)
  {

  }


  public GetAssignedToMeTasks(userId: string)
  {
    return this.http.get<any>(this.config.apiUrl + 'TaskApi/GetAssignedToMeTasks?userId=' + userId);
  }


  public GetCreatedByMeTasks(id: string)
  {
    return this.http.get<any>(this.config.apiUrl + 'TaskApi/GetCreatedByMeTasks?userId=' + id);
  }

  public GetRelatedToMeTasks(id: string)
  {
    return this.http.get<any>(this.config.apiUrl + 'TaskApi/GetRelatedToMeTasks?userId=' + id);
  }
  public GetTasks()
  {
    return this.http.get<any>(this.config.apiUrl + 'TaskApi/GetTasks');
  }
  public GetAssignedToMe(id: string)
  {
    return this.http.get<any>(this.config.apiUrl + 'TaskApi/GetAssignedToMeTasks?userId=' + id);
  }

  public GetTaskDetails(id: string)
  {
    return this.http.get<any>(this.config.apiUrl + 'TaskApi/GetTaskDetails?id=' + id);
  }
  public SaveTask(aModel)
  {
    return this.http.post<any>(this.config.apiUrl + 'TaskApi/SaveTask', aModel);
  }
  public GetStatusList()
  {
    return this.http.get<any>(this.config.apiUrl + 'TaskApi/GetTaskStatusList');
  }
  public GetPriorityList()
  {
    return this.http.get<any>(this.config.apiUrl + 'TaskApi/GetPriorityList');
  }
  public GetAssignToList()
  {
    return this.http.get<any>(this.config.apiUrl + 'EmployeeApi/GetEmployeeAsTextValue');
  }
  public DeleteTask(id: string)
  {
    return this.http.get<any>(this.config.apiUrl + 'TaskApi/DeleteTask?id=' + id);
  }
  public GetTaskAttachments(id: string)
  {
    return this.http.get<any>(this.config.apiUrl + 'TaskApi/GetTaskAttachments?taskId=' + id);
  }
  public Upload(aModel)
  {
    return this.http.post<any>(this.config.apiUrl + 'AzureFileStorageApi/Upload', aModel);
  }
}

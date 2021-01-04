import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map'

@Injectable()
export class DepartmentServices
{

    constructor(private http: HttpClient, private config: AppConfig)
    {
    }

    public CreateDepartment(model)
    {
        return this.http.post<any>(this.config.apiUrl + 'TodoItems', model);
    }

    public UpdateDepartment(model)
    {
        return this.http.put<any>(this.config.apiUrl + 'TodoItems/'+model.id, model);
    }

    public GetDepartment()
    {
        const action = 'TodoItems';
        return this.http.get(this.config.apiUrl + action);
    }

    public DeleteDepartmentById(id)
    {
      return this.http.delete<any>(this.config.apiUrl + 'TodoItems?id='+ id);
    }

}

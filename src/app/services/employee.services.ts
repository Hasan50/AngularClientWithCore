import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map'

@Injectable()
export class EmployeeServices
{

    constructor(private http: HttpClient, private config: AppConfig)
    {
    }

    public CreateEmployee(model)
    {
        return this.http.post<any>(this.config.apiUrl + 'EmployeeApi/CreateEmployee', model);
    }


    public UpdateEmployee(model)
    {
      console.log(model,'testmodel')
        return this.http.post<any>(this.config.apiUrl + 'EmployeeApi/UpdateEmployee', model);
    }

    public GetEmployee()
    {
        const action = 'EmployeeApi/GetEmployee';
        return this.http.get(this.config.apiUrl + action);
    }

    public DeleteEmployee(id)
    {
      return this.http.get<any>(this.config.apiUrl + 'EmployeeApi/DeleteEmployee?Id='+ id);
    }
    public GetEmployeeCboList()
    {
      return this.http.get<any>(this.config.apiUrl + 'EmployeeApi/GetEmployeeAsTextValue');
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map'

@Injectable()
export class DesignationServices
{

    constructor(private http: HttpClient, private config: AppConfig)
    {
    }

    public CreateDesignation(model)
    {
        return this.http.post<any>(this.config.apiUrl + 'DesignationApi/Save', model);
    }

    public UpdateDesignation(model)
    {
        return this.http.post<any>(this.config.apiUrl + 'DesignationApi/Updatedesignation', model);
    }

    public GetDesignationByCompanyId()
    {
        const action = 'DesignationApi/GetDesignationByCompanyId';
        return this.http.get(this.config.apiUrl + action);
    }

    public DeleteDesignationtById(id)
    {
      return this.http.get<any>(this.config.apiUrl + 'DesignationApi/DeleteDesignationById?Id='+ id);
    }

}

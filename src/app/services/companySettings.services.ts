import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map'

@Injectable()
export class CompanyServices
{

    constructor(private http: HttpClient, private config: AppConfig)
    {
    }

    public CreateCompany(aModel)
    {
        return this.http.post<any>(this.config.apiUrl + 'CompanyApi/Save', aModel);
    }

    public UpdateCompany(aModel)
    {
        return this.http.post<any>(this.config.apiUrl + 'CompanyApi/UpdateCompany', aModel);
    }

    public GetCompanyByUserId(id: string)
    {
        return this.http.get<any>(this.config.apiUrl + 'CompanyApi/GetCompanyByUserId?userId=' + id);
    }

    public GetCompanyByEmpUserId(id: string)
    {
        return this.http.get<any>(this.config.apiUrl + 'CompanyApi/GetCompanyByEmpUserId?userId=' + id);
    }

    public GetCompanyByIdentity()
    {
        return this.http.get<any>(this.config.apiUrl + 'CompanyApi/GetCompanyByIdentity');
    }

    public DeleteCompany(id)
    {
      return this.http.get<any>(this.config.apiUrl + 'CompanyApi/DeleteCompany?Id=' + id);
    }
    
}

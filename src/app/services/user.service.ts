import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { User } from '../models/user';
import {AuthenticationService} from './authentication.service';
import { Base } from './base';

@Injectable()
export class UserService extends Base {

  constructor(private http: HttpClient, private config: AppConfig, authenticationService:AuthenticationService) {
      super(authenticationService);
  }

  GetLoginUserInfo() {
    const currentUserkey = localStorage.getItem('userKey');
    const action = 'CompanyApi/GetCompanyByUserId?userId=' + currentUserkey;
    return  this.http.get(this.config.apiUrl + action);
}

  create(user: User) {
    return  this.http.post<any>(this.config.apiUrl + 'AccountApi/Createaccount', user);
  }
  Register(user: User) {
    return  this.http.post<any>(this.config.apiUrl + 'AccountApi/Register', user);
  }
  
  public GetTimeZoneList()
  {
      return this.http.get<any>(this.config.apiUrl + 'AccountApi/GetTimeZoneList');
  }

}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config';


@Injectable()
export class AuthenticationService
{



    constructor(private http: HttpClient, private config: AppConfig)
    {

    }

    public login(username: string, password: string)
    {
        return this.http.post<any>(this.config.apiUrl + 'AccountApi/LoginAdmin', { username: username, password: password })
            .pipe(map(user =>
            {
                if (user && user.Token)
                {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log(JSON.stringify(user), 'logUser');
                    localStorage.setItem('UserName', user.UserName);
                    localStorage.setItem('UserPhone', user.UserPhone);
                    localStorage.setItem('UserEmail', user.UserEmail);
                    localStorage.setItem('userKey', user.UserKey);
                }
                return user;
            }));
    }

    public logout()
    {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('UserName');
        localStorage.removeItem('UserPhone');
        localStorage.removeItem('UserEmail');
        localStorage.removeItem('userKey');
    }

    public isAuthenticated()
    {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.Token)
        {
            return true;
            console.log(currentUser, 'currentUser');

        }
        return false;
    }

    public ChangePassword(aModel)
    {
      return this.http.post<any>(this.config.apiUrl + 'AccountApi/ChangePasswordFromWebPanel/', aModel);
    }

}

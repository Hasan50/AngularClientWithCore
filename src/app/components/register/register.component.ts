import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../../services';
import {getCountryList} from '../../services/countryList'
@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css'],
    host: { 'class': 'row' }
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    hide = true;
    timeZoneList=[];
    countryList=getCountryList();
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { 
            this.GetTimeZoneList();
        }
    private GetTimeZoneList(): void {
        this.userService.GetTimeZoneList().subscribe(x => {
            this.timeZoneList = x;
        });
    }

    register() {
        this.loading = true;
        this.userService.Register(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}

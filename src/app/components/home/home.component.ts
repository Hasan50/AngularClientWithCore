import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { User } from '../../models/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: { 'class': 'home' }
})
export class HomeComponent implements OnInit {

  currentUser: User;
    users: User[] = [];

  constructor(private router: Router, private location: Location) {
        
  }

  ngOnInit() {    
    if (location.pathname == '/') {
      this.router.navigate(['dashboard']);
     
    }
  }
}

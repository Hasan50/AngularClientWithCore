import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo
{
  path: string;
  title: string;
  icon: string;
  class: string;
  children: any;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'developer_board', class: 'icon-blue-color', children: '' },
  { path: '/settings', title: 'Settings', icon: 'settings', class: 'icon-blue-color',
    children:
      [
        { path: '/settings/company', title: 'Company Info', icon: 'content_paste', class: 'nav-item-sub' },
        { path: '/settings/department', title: 'Department List', icon: 'attach_money', class: 'nav-item-sub' },
        { path: '/settings/designation', title: 'Designation List', icon: 'attach_money', class: 'nav-item-sub' },
      ]
  }
 
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit
{
  menuItems: any[];

  constructor() { }

  ngOnInit()
  {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu()
  {
    if ($(window).width() > 991)
    {
      return false;
    }
    return true;
  };
}

import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';




import { AboutComponent } from '../../components/settings/about/about.component';

import { DepartmentSetupComponent } from '../../components/settings/department/department-setup/department-setup.component';

export const AdminLayoutRoutes: Routes = [


    { path: 'dashboard', component: DashboardComponent },
    { path: 'settings/department', component: DepartmentSetupComponent },
    { path: 'about', component: AboutComponent },

];

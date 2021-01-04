import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';




import { AgGridModule } from 'ag-grid-angular';


import { RegisterComponent } from '../../components/register/register.component';
import { AboutComponent } from '../../components/settings/about/about.component';


import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule, MatInputModule, MatRippleModule, MatFormFieldModule, MatTooltipModule, MatSelectModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SortablejsModule } from 'angular-sortablejs';
import { ColorPickerModule } from 'ngx-color-picker';

import { DepartmentSetupComponent } from '../../components/settings/department/department-setup/department-setup.component';


import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDatepickerModule,} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    SortablejsModule.forRoot({ animation: 150 }),
    ColorPickerModule,
    DragDropModule,
    MatTabsModule,
    MatDatepickerModule,
    AgGridModule.withComponents([DashboardComponent])
  ],
  declarations: [
    DashboardComponent,
    AboutComponent,
    DepartmentSetupComponent,

  ],
  exports: [],
  entryComponents: [
  ]
})

export class AdminLayoutModule { }

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from 'helpers';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './directives/alert.component';
import { AppConfig } from './app.config';
import { AlertService, AuthenticationService, UserService, LeavesService, FinancialService, AttendanceService } from './services';
import { EventEmitterService } from './services/eventemiter.service';
import { TasksService } from './services/tasks.service';
import { ExportService } from './services/export.service';
import { NoticeService } from './services/notice.service';
import { GeoService } from './services/GeoService';
import { AuthGuard } from './guard';
import { DatePipe } from '@angular/common';
import { MyDatePickerModule } from 'mydatepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDatepickerModule, MatNativeDateModule,} from '@angular/material';

import { LoginComponent } from './components/login/login.component';
import { HomeLeftSectionComponent } from './directives/home-left-section/home-left-section.component';
import { LoaderComponent } from './components/loader/loader.component';

import { CreateDepartmentComponent } from './components/settings/department/create-department/create-department.component';




import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CompanyServices } from './services/companySettings.services';
import { DepartmentServices } from './services/department.services';
import { DesignationServices } from './services/designation.services';
import {ClaimService} from './services/claim.service'
import { EmployeeServices } from './services/employee.services';
import { SortablejsModule } from 'angular-sortablejs';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ConfirmationModalService } from './confirm-modal/confirm-modal.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    MatRadioModule,
    MatSlideToggleModule,
    MyDatePickerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),
    SortablejsModule.forRoot({ animation: 150 })
   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    AlertComponent,
    LoginComponent,
    HomeLeftSectionComponent,
    LoaderComponent,
    CreateDepartmentComponent,
    ConfirmModalComponent,
    RegisterComponent,
  ],
  entryComponents: [
    CreateDepartmentComponent,
    ConfirmModalComponent,
  ],
  providers: [
    AppConfig,
    AuthGuard,
    AlertService,
    GeoService,
    AuthenticationService,
    UserService,
    LeavesService,
    FinancialService,
    AttendanceService,
    TasksService,
    CompanyServices,
    DepartmentServices,
    DesignationServices,
    EventEmitterService,
    EmployeeServices,
    NoticeService,
    ExportService,
    ClaimService,
    ConfirmationModalService,
    [DatePipe],
    
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

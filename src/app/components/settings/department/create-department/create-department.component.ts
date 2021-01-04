import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentServices } from '../../../../services/department.services';
import { DepartmentModel } from '../../../../models/departmentModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit
{
  private sub: any;

  private userId: string;


  @Input() popupModel: any

  departmentDataModel: {name:null};

  constructor(
    public activeModal: NgbActiveModal,
    private aService: DepartmentServices,
    private toasterService: ToastrService,
  )
  {
    this.userId = localStorage.getItem('userKey');

  }

  private getDepartmentDetails(): void
  {
    if (this.popupModel == "0")
    {
      this.departmentDataModel={name:null};
      return;
    }
    this.departmentDataModel = this.popupModel;
  }

  public CreateDepartment()
  {
    
    if (this.popupModel == '0')
    {
      this.sub = this.aService.CreateDepartment(this.departmentDataModel).subscribe(x =>
      {
        if (x.Id > 0)
        {
          this.toasterService.success("Department Created Successfully", 'Success');
        }
        else
        {
          this.toasterService.error("Something Error.Try again later", 'Error');
        }

        this.activeModal.close();
      });
    }
    else
    {
      this.sub = this.aService.UpdateDepartment(this.departmentDataModel).subscribe(x =>
      {
        if (x.Id > 0)
        {
          this.toasterService.success("Department Updated Successfully", 'Success');
        }
        else
        {
          this.toasterService.error("Something Error.Try again later", 'Error');
        }

        this.activeModal.close();
      });
    }

  }

  ngOnInit()
  {
    this.getDepartmentDetails()
  }

}

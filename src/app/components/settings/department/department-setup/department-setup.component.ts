import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentServices } from '../../../../services/department.services';
import { ToastrService } from 'ngx-toastr';
import { CreateDepartmentComponent } from '../create-department/create-department.component';
import { EventEmitterService } from '../../../../services/eventemiter.service';
import { ConfirmationModalService } from '../../../../confirm-modal/confirm-modal.service';
import { ExportService } from '../../../../services/export.service';

@Component({
  selector: 'app-department-setup',
  templateUrl: './department-setup.component.html',
  styleUrls: ['./department-setup.component.scss']
})
export class DepartmentSetupComponent implements OnInit, OnDestroy
{
  private aModel: any;
  private sub: any;
  public dataList: any = [];
  private userId: string;
  isDashboardUpdate = false;

  popupModel: any = { Id: "", IsNew: false };
  loading: boolean;
  currentPage: any;
  p=1;
  constructor(
    private aService: DepartmentServices,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private eventEmitterService: EventEmitterService,
    private ConfirmationModalService: ConfirmationModalService,
    private eService: ExportService 
    ) 
  {
    this.userId = localStorage.getItem('userKey');
  }
  pageChanged(event)
  {
    this.currentPage = event;
  }
  private getDepartments(): void
  {
    this.loading = true;
    this.sub = this.aService.GetDepartment().subscribe(x =>
    {
      this.dataList = x;
      console.log(this.dataList,'datalist');
      
      if (this.dataList !=null || this.dataList  == null)
      {
        this.loading = false;
      }
    });
  }
  ngOnInit()
  {
    this.getDepartments();
    this.eventEmitterService.change.subscribe(x =>
      {
        this.isDashboardUpdate = x;
        this.getDepartments();
      });
  }
  public addOrUpdateDepartmentPopup(aModel)
  {

    const modalRef = this.modalService.open(CreateDepartmentComponent,
      { size: 'lg', backdrop: 'static', keyboard: false });
    this.popupModel = aModel;
    (<CreateDepartmentComponent>modalRef.componentInstance).popupModel = this.popupModel;
    modalRef.result.then((result) =>
    {
      this.getDepartments();
    }).catch((result) =>
    {
      console.log(result);
    });
  }
  public openConfirmationDialog(id: string)
  {

    this.ConfirmationModalService.confirm('Please confirm..', 'Do you really want to Delete This Department?')
      .then((confirmed) => this.deleteDepartment(confirm, id))
      .catch(() => console.log('dismissed'));
  }

  deleteDepartment(confirm, id: string)
  {
    if (confirm)
    {
      this.sub = this.aService.DeleteDepartmentById(id).subscribe(x =>
      {
        console.log(x)
        if (x['Success'])
        {
          this.getDepartments();        
            this.toastr.success("Department Deleted Successfully", 'Success');         
        }
        else
        {
          this.toastr.error("This departments has employess" , 'Error');
        }
      });
    }

  }
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

  exportExcel(){
    var exportList=[];
    for(var i=0;i<this.dataList.length;i++){
      exportList.push({
        DepartmentName:this.dataList[i].DepartmentName
      });
    }
    this.eService.exportAsExcelFile(exportList, 'DepartmentList');
  }

}

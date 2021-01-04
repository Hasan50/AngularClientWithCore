import { Component, ViewChild, ElementRef, OnInit, NgZone, OnDestroy, Input } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { EventEmitterService } from '../services/eventemiter.service';
import { NoticeService } from '../services/notice.service'
import { AppConfig } from '../app.config';

declare const google: any;

@Component({
  selector: 'app-tasks',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy
{

  public icon;
  private userId: string;
  public employeeList: any = [];
  public noticeList: any = [];
  private sub: any;
  private subNotice: any;
  myDate = new Date();

  @ViewChild('search')
  public searchElementRef: ElementRef;
  isDashboardUpdate = false;



  constructor(
    private aService: AttendanceService,
    private nService:NoticeService,
    private eventEmitterService: EventEmitterService,
    private config:AppConfig) 
  {
    this.userId = localStorage.getItem('userKey');
  }

  ngOnInit()
  {
    this.getMasterData();
    this.eventEmitterService.change.subscribe(x =>
    {
      this.isDashboardUpdate = x;
      this.getMasterData();
    });
  }

  getMasterData()
  {
    this.getAttendance();
    this.getNoticeList();
  }


  public getAttendance(): void
  {
    this.sub = this.aService.GetAttendanceFeed().subscribe(x =>
    {
      this.employeeList = x.EmployeeList;
    });
  }

  
  public getNoticeList(): void
  {
    this.subNotice = this.nService.GetLatestNoticeList().subscribe(x =>
    {
      this.noticeList = x;
    });
  }


  ngOnDestroy()
  {
    this.sub.unsubscribe();
    this.subNotice.unsubscribe();
  }

}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map'

@Injectable()
export class NoticeService
{

  constructor(private http: HttpClient, private config: AppConfig)
  {

  }

  public GetNoticeList()
  {
    return this.http.get<any>(this.config.apiUrl + 'NoticeBoardApi/GetNoticeBoard');
  }

  public GetLatestNoticeList()
  {
    return this.http.get<any>(this.config.apiUrl + 'NoticeBoardApi/GetLatestNotice');
  }
  

}

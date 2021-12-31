import { Injectable } from '@angular/core';
import { Http2ServerRequest, Http2ServerResponse } from 'http2';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _httpReq: Http2ServerRequest, private _httpRes: Http2ServerResponse) {};
  
  getData() {
    return this._httpRes.get
  }
}

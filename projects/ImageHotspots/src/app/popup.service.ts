// Observable Version
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Popup } from './popup';

@Injectable()
export class PopupService {
  private jsonFileURL: string = 'app/data.json';
  popups: Popup[];
  constructor(private http: Http) {
    this.http.get(this.jsonFileURL).subscribe(res => this.popups = <Popup[]> res.json());
  }

  getPopups(): Observable< Popup[] > {
    return this.http.get(this.jsonFileURL)
      .map(this.exactData)
      .catch(this.handleError);
  }

  private exactData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

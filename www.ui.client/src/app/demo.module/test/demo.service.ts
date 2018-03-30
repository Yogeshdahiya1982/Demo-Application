import { Inject, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response, Request, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DemoInfo} from '../models';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'


@Injectable()
export class DemoService {
   
    private api = "http://localhost:4000/api/";
    private cachService: Cache;
    constructor(private http: Http) {  }


    Save(info: DemoInfo): Observable<Response> {
        let apiUrl = this.api + "saveData";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ method: RequestMethod.Post, headers: headers, body: JSON.stringify(info), url: apiUrl });

        return this.http.request(new Request(options))
            .map((res: Response) =>res)
            .catch(this.handleError);

    }
    
    Get(): Observable<DemoInfo[]> {
        let api = this.api + "getData";
        return this.http.get(api)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    isNumeric(event: any) {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode == 8 || event.keyCode == 46
            || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else if (key < 48 || key > 57) {
            return false;
        }
        else return true;
    };

    private handleError(error: Response | any) {
        console.log("handle error called");
        console.log(error);
        console.log(error.json());
        return Observable.throw(error.json().error || 'Internal Server error');
    }

   
}

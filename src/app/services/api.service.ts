import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  _url: string
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}

     
    // Fetch all 
     getApi(_url){
         // ...using get request
         return this.http.get(_url)
            // ...and calling .json() on the response to return data
              .map((res:Response) => res.json())
              //...errors if any
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     };

     searchData(_url){
      return this.http.get(_url)
                .map(res => res.json())
     }

}

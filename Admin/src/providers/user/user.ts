import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

	url: any;
	data: any;
	userID: any;

	constructor(public http: Http) {
		this.url = "http://localhost:8080";
		this.data = null;
	}

	getUserInformationById(id) {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/user/cart/'+this.userID)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
	}
}

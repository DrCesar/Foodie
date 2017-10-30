import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InformationProvider {
	restaurante: string = "LinLin";
	data: any;
	url: any;

	constructor(public http: Http) {
			this.url = "http://localhost:8080";
			this.data = null;
		}

	getOrders() {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/admin/'+this.restaurante)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
	}
}

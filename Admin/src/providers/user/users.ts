import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

	url: any;
	data: any;

	constructor(public http: Http) {
		this.url = "http://localhost:8080";
		this.data = null;
	}

	getCartByUser(userID) {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/user/cart/'+userID)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
	}

	getUser(user) {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/user/'+user.email+"/"+user.user)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
	}


	signin(user) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post('http://localhost:8080/users/signin', JSON.stringify(user), {headers: headers})
			.map(res => {return res});
	}
}
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InformationProvider {

    data: any;
    url: any;

    constructor(public http: Http) {
        this.data = null;
        this.url = "http://localhost:8080";
    }

    getTypeRestaurant() {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/menu')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    getRestaurantByType(type) {
        return new Promise(resolve => {
            this.http.get(this.url + "/api/menu/" + type)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    getOptionsByRestaurant(restaurant) {
        return new Promise(resolve => {
            this.http.get(this.url + "/api/menu/type/" + restaurant)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    getMenuByOptions(restaurant, option) {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/menu/type/' + restaurant + "/" + option)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }
}

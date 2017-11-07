import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { MenuItem } from '../../models/menuItem';

@Injectable()
export class InformationProvider {
	restaurant: string = "LinLin";
	data: any;
	url: any;
	item = {} as MenuItem;

	constructor(public http: Http) {
			this.url = "http://localhost:8080";
			this.data = null;
		}

	getOrders() {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/admin/'+this.restaurant)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
	}

	getCategories() {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/admin/categories/'+this.restaurant)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
	}

	addCategory(category) {
		let categoryData = {
			restaurant: this.restaurant,
			category: category
		}

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		this.http.post(this.url + '/api/admin/category', JSON.stringify(categoryData), {headers: headers})
			.subscribe(res => {
				console.log(res.json());
			});
	}

	getMenuByOptions(option) {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/menu/type/' + this.restaurant + "/" + option)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

	addItemToMenu(name, description, price, category) {
		this.item.restaurant = this.restaurant;
		this.item.name = name;
		this.item.description = description;
		this.item.price = price;
		this.item.type = category;

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		this.http.post(this.url + '/api/admin/menu', JSON.stringify(this.item), {headers: headers})
			.subscribe(res => {
				console.log(res.json());
			});
	}

	editItem(id, name, description, price) {

	}
}

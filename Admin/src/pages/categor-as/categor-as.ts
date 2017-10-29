import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlatosPage } from '../platos/platos';
import {  FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-categor-as',
  templateUrl: 'categor-as.html'
})
export class CategorAsPage {
restaurant:any;
items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afDB: AngularFireDatabase) {
      this.restaurant=navParams.get('restaurant');
      this.items = afDB.list(this.restaurant);
      console.log(this.restaurant);
  }
  goToPlatos(params){
    let data = {category:params};
    this.navCtrl.push(PlatosPage, data);
  }
}

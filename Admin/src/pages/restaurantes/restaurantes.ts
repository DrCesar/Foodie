import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategorAsPage } from '../categor-as/categor-as';
import { PlatosPage } from '../platos/platos';
import { InformationProvider } from '../../providers/information/information';
// import {  FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
// import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html'
})
export class RestaurantesPage {
  type: any;
  restaurants: any;

  constructor(public navCtrl: NavController, private informationService: InformationProvider, public navParams: NavParams) {
    this.type = this.navParams.get('type');
    this.informationService.getRestaurantByType(this.type).then((data) => {
      this.restaurants = data;
    });
  }


  goToCategorias(params){
    let data = {restaurant: params};
    this.navCtrl.push(CategorAsPage, data);
  }goToPlatos(params){
    if (!params) params = {};
    this.navCtrl.push(PlatosPage);
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategorAsPage } from '../categor-as/categor-as';
import { PlatosPage } from '../platos/platos';

@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html'
})
export class RestaurantesPage {
  type: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.type = this.navParams.get('type');
      console.log(this.type);
  }
  goToCategorias(params){
    let data = {restaurant: params};
    this.navCtrl.push(CategorAsPage, data);
  }goToPlatos(params){
    if (!params) params = {};
    this.navCtrl.push(PlatosPage);
  }
}

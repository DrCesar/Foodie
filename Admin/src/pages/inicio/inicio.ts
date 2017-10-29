import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PlatosPage } from '../platos/platos';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import {datosUser} from '../../models/datosUser';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  
  constructor(public navCtrl: NavController, private toast: ToastController) {
  }
  goToRestaurants(params){
    console.log(params);
    let data = {type: params};
    this.navCtrl.push(RestaurantesPage, data);
  }goToPlatos(params){
    if (!params) params = {};
    this.navCtrl.push(PlatosPage);
  }
}

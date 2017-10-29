import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PlatosPage } from '../platos/platos';
import { RestaurantesPage } from '../restaurantes/restaurantes';
// import {  FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
// import {AngularFireAuth} from 'angularfire2/auth';
import {datosUser} from '../../models/datosUser';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  // profileData: FirebaseObjectObservable<datosUser>;
  // items: FirebaseListObservable<any[]>;
  constructor(/*private afAuth:AngularFireAuth,*/ public navCtrl: NavController, /*private afDB: AngularFireDatabase,*/ private toast: ToastController) {
    // this.items = afDB.list('/Categorias');
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

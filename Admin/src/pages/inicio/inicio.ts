import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PlatosPage } from '../platos/platos';
import { RestaurantesPage } from '../restaurantes/restaurantes';
// import {  FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
// import {AngularFireAuth} from 'angularfire2/auth';
import { UserProvider } from '../../providers/user/users';
import {datosUser} from '../../models/datosUser';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  orders: any;
  // profileData: FirebaseObjectObservable<datosUser>;
  // items: FirebaseListObservable<any[]>;
  constructor(/*private afAuth:AngularFireAuth,*/ private userServie: UserProvider, public navCtrl: NavController, /*private afDB: AngularFireDatabase,*/ private toast: ToastController) {
    // this.items = afDB.list('/Categorias');
  }

  ionViewDidLoad() {

    this.userServie.getOrders()
      .then(data => {
        console.log(data);
        this.orders = data;
      });

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

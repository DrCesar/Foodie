import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {datosUser} from '../../models/datosUser';
import { LoginPage } from '../login/login';
import { AcercaDeFoodiePage } from '../acerca-de-foodie/acerca-de-foodie';
import { PlatosPage } from '../platos/platos';
import { AlertController } from 'ionic-angular';
import { InformationProvider } from '../../providers/information/information';
import { UserProvider } from '../../providers/user/user';

@Component({
    selector: 'page-revisar-pedidos',
    templateUrl: 'revisar-pedidos.html',
  })
  export class RevisarPedidosPage {

    profileData: FirebaseObjectObservable<datosUser>;
    items: FirebaseListObservable<any[]>;
    orders: any;
    dates: any;
    months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    timePassed = [];

    constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public informationService: InformationProvider,
    public userService: UserProvider) {

    }

    ionViewDidEnter() {
        this.informationService.getOrders().then((data) => {
            this.orders = data;
            this.dates = [];
            this.getDates(0);
        });
    }

    getDates(i) {
        if (i < this.orders.length) {
            var tempDate = new Date(this.orders[i].date);
            this.orders[i].date = tempDate.getDate() + " " + this.months[tempDate.getMonth()] + ", " + tempDate.getFullYear();
            this.getDates(i+1);
            var now = new Date();
            var timePassed = now.getTime() - tempDate.getTime();
            var mins = Math.floor((timePassed % 3600000) / 60000);
            var hrs = Math.floor(timePassed / 3600000)
            this.orders[i].timePassed = hrs + "h " + mins + "mins";
        } else {

        }
    }

    showComment(i, j) {
        let alert = this.alertCtrl.create({
            title: "Comentario",
            subTitle: this.orders[i].items[j].comment,
            buttons: ['OK']
        });
        alert.present();
    }

    goToAcercaDeFoodie(params){
      if (!params) params = {};
      this.navCtrl.push(AcercaDeFoodiePage);
    }

    goToPlatos(params){
            if (!params) params = {};
            this.navCtrl.push(PlatosPage);
    }

  }

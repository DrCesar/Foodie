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

@Component({
    selector: 'page-editar-menu',
    templateUrl: 'editar-menu.html'
  })
  export class EditarMenuPage {
    profileData: FirebaseObjectObservable<datosUser>;
    items: FirebaseListObservable<any[]>;
    constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    }
    goToAcercaDeFoodie(params){
      if (!params) params = {};
      this.navCtrl.push(AcercaDeFoodiePage);
    }
    goToPlatos(params){
            if (!params) params = {};
            this.navCtrl.push(PlatosPage);
    }
    agregarCategoria(){
        let prompt = this.alertCtrl.create({
            title: "Crear nueva categoría",
            message: "Ingrese el nombre de la nueva categoría:",
            inputs: [
                {
                    name: 'nombre',
                    placeholder: 'Nombre'
                }

            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Guardar'
                }
            ]
        });
        prompt.present();
    }
  }
import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import {datosUser} from '../../models/datosUser';
import { LoginPage } from '../login/login';
import { AcercaDeFoodiePage } from '../acerca-de-foodie/acerca-de-foodie';
import { PlatosPage } from '../platos/platos';
import { AlertController } from 'ionic-angular';
import { InformationProvider } from '../../providers/information/information';

@Component({
    selector: 'page-editar-menu',
    templateUrl: 'editar-menu.html'
  })
  export class EditarMenuPage {

      options: any;

    constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public informationService: InformationProvider) {
    }

    ionViewDidEnter() {
        this.informationService.getCategories().then((data) => {
            this.options = data;
        });
    }

    goToAcercaDeFoodie(params){
      if (!params) params = {};
      this.navCtrl.push(AcercaDeFoodiePage);
    }

    goToPlatos(params){
        let data = {option: params};
        this.navCtrl.push(PlatosPage, data);
    }

    agregarCategoria(){
        let prompt = this.alertCtrl.create({
            title: "Crear nueva categoría",
            message: "Ingrese el nombre de la nueva categoría:",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Nombre'
                }

            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Guardar',
                    handler: data => {
                        this.confirmAlert(data.name);
                    }
                }
            ]
        });
        prompt.present();
    }

    confirmAlert(category) {
        let alert = this.alertCtrl.create({
        title: '¿Desea agregar esta categoría?',
        message: 'La categoría será mostrada a los clientes de ahora en adelante.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Confirmar',
            handler: () => {
              this.addCategory(category);
            }
          }
        ]
      });
      alert.present();
    }

    addCategory(category) {
        this.informationService.addCategory(category);
        if (this.options.indexOf(category) < 0 )
            this.options.push(category);
    }
  }

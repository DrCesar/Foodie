import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{PlatoPage} from '../plato/plato';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the PlatosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-platos',
  templateUrl: 'platos.html',
})
export class PlatosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlatosPage');
  }
  goToPlato(params){
    if (!params) params = {};
    this.navCtrl.push(PlatoPage);
  }
  agregarPlato(){
    let prompt = this.alertCtrl.create({
        title: "Crear nuevo Plato",
        message: "Ingrese los datos del nuevo plato:",
        inputs: [
            {
                name: 'nombre',
                placeholder: 'Nombre'
            },
            {
              name: 'descripcion',
              placeholder: 'Descripcion'
            },
            {
              name: 'precio',
              placeholder: 'Precio en quetzales'
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
editarPlato(params){
    let prompt = this.alertCtrl.create({
        title: "Editar plato",
        message: "Aquí puede modificar los datos de este producto:",
        inputs: [
            {
                name: 'nombre',
                value: 'Rollo de salmón'
            },
            {
              name: 'descripcion',
              value: 'Delicioso rollo de salmón con aguacate, queso crema y salsa de ostras.'
            },
            {
              name: 'precio',
              value: '70.00'
            }

        ],
        buttons: [
            {
                text: 'Cancelar'
            },
            {
                text: 'Guardar'
            },
            {
                text: 'Eliminar plato'
            }
        ]
    });
    prompt.present();
}
}

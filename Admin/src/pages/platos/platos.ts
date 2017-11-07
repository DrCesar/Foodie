import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{PlatoPage} from '../plato/plato';
import { AlertController } from 'ionic-angular';
import { InformationProvider } from '../../providers/information/information';
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

    category: any;
    menu: any;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public alertCtrl: AlertController,
  public informationService: InformationProvider) {
  }

  ionViewDidLoad(){
    this.category = this.navParams.get('option');
    this.informationService.getMenuByOptions(this.category).then((data) => {
        this.menu = data;
    });
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
                    name: 'name',
                    placeholder: 'Nombre'
                },
                {
                  name: 'description',
                  placeholder: 'Descripcion'
                },
                {
                  name: 'price',
                  placeholder: 'Precio en quetzales'
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
                        this.confirmAlert(data.name, data.description, data.price);
                    }
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

    confirmAlert(name, description, price) {
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
              this.informationService.addItemToMenu(name, description, price, this.category);
            }
          }
        ]
      });
      alert.present();
    }
}

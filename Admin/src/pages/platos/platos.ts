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
                        this.confirmAlertAdd(data.name, data.description, data.price);
                    }
                }
            ]
        });
        prompt.present();
    }

    editarPlato(index){
        let prompt = this.alertCtrl.create({
            title: "Editar plato",
            message: "Aquí puede modificar los datos de este plato:",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Nombre',
                    value: this.menu[index].name
                },
                {
                  name: 'description',
                  placeholder: 'Descripcion',
                  value: this.menu[index].description
                },
                {
                  name: 'price',
                  placeholder: 'Precio en quetzales',
                  value: (this.menu[index].price/100).toFixed(2)
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
                        this.confirmAlertEdit(this.menu[index]._id, data.name, data.description, data.price, index)
                    }
                },
                {
                    text: 'Eliminar plato',
                    handler: () => {
                        this.confirmAlertDelete(index);
                    }
                }
            ]
        });
        prompt.present();
    }

    confirmAlertAdd(name, description, price) {
        let alert = this.alertCtrl.create({
        title: '¿Desea agregar este plato?',
        message: 'El plato será mostrado a los clientes de ahora en adelante.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Confirmar',
            handler: () => {
              this.informationService.addItemToMenu(name, description, price, this.category).then((data) => {
                  this.menu.push(data);
              });
            }
          }
        ]
      });
      alert.present();
    }

    confirmAlertDelete(index) {
        let alert = this.alertCtrl.create({
        title: '¿Desea borrar este plato?',
        message: 'Este plato ya no será mostrada a los clientes de ahora en adelante.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Confirmar',
            handler: () => {
                this.informationService.deleteItem(this.menu[index]._id);
                this.menu.splice(index, 1);
            }
          }
        ]
      });
      alert.present();
    }

    confirmAlertEdit(id, name, description, price, index) {
        let alert = this.alertCtrl.create({
        title: '¿Desea cambiar la información de este plato?',
        message: 'La nueva información del plato será mostrado a los clientes de ahora en adelante.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Confirmar',
            handler: () => {
              this.informationService.editItem(id, name, description, price).then((data) => {
                  this.menu.splice(index, 1, data);
              });
            }
          }
        ]
      });
      alert.present();
    }
}

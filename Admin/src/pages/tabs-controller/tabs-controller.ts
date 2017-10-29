import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { CategorAsPage } from '../categor-as/categor-as';
import { PlatosPage } from '../platos/platos';
import { PedidoActualPage } from '../pedido-actual/pedido-actual';
import { RestaurantesCercanosPage } from '../restaurantes-cercanos/restaurantes-cercanos';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = InicioPage;
  tab2Root: any = PedidoActualPage;
  tab3Root: any = RestaurantesCercanosPage;
  constructor(public navCtrl: NavController) {
  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToCategorAs(params){
    if (!params) params = {};
    this.navCtrl.push(CategorAsPage);
  }goToPlatos(params){
    if (!params) params = {};
    this.navCtrl.push(PlatosPage);
  }oToPedidoActual(params){
    if (!params) params = {};
    this.navCtrl.push(PedidoActualPage);
  }goToRestaurantesCercanos(params){
    if (!params) params = {};
    this.navCtrl.push(RestaurantesCercanosPage);
  }
}

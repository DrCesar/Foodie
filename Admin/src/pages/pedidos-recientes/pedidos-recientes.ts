import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PedidoAnteriorPage } from '../pedido-anterior/pedido-anterior';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
@Component({
  selector: 'page-pedidos-recientes',
  templateUrl: 'pedidos-recientes.html'
})
export class PedidosRecientesPage {

  constructor(public navCtrl: NavController) {
  }
  goToPedidoAnterior(params){
    if (!params) params = {};
    this.navCtrl.push(PedidoAnteriorPage);
  }regresar(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
  
}

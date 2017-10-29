import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-resultados-de-bsqueda',
  templateUrl: 'resultados-de-bsqueda.html'
})
export class ResultadosDeBSquedaPage {

  constructor(public navCtrl: NavController) {
  }
  regresar(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
}

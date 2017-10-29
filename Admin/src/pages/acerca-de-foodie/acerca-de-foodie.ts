import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-acerca-de-foodie',
  templateUrl: 'acerca-de-foodie.html'
})
export class AcercaDeFoodiePage {

  constructor(public navCtrl: NavController) {
  }
  regresar(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage); 
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

import {datosUser} from '../../models/datosUser';
import {User} from '../../models/user';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  usuario = {} as datosUser; 
  user = {} as User;
  constructor( public navCtrl: NavController) {
    var tmp = document.getElementById('menu-heading1');
    this.ionViewWillLoad();
  }
  ionViewWillLoad(){
  }
  regresar(params){
    if (!params) params = {};
  }
}

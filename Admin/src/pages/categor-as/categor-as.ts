import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlatosPage } from '../platos/platos';

@Component({
  selector: 'page-categor-as',
  templateUrl: 'categor-as.html'
})
export class CategorAsPage {
restaurant:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
      this.restaurant=navParams.get('restaurant');
      console.log(this.restaurant);
  }
  goToPlatos(params){
    let data = {category:params};
    this.navCtrl.push(PlatosPage, data);
  }
}

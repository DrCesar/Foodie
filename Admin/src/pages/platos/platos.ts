import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';


@Component({
  selector: 'page-platos',
  templateUrl: 'platos.html'
})
export class PlatosPage {

  category:any;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }
  
}

import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import {  FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-platos',
  templateUrl: 'platos.html'
})
export class PlatosPage {

  category:any;
  items: FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afDB: AngularFireDatabase) {
      this.category=navParams.get('category');
      this.items = afDB.list(this.category);
      console.log(this.category);
  }
  
}

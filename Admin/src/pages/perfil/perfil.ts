import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

// import {AngularFireAuth} from 'angularfire2/auth';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import {datosUser} from '../../models/datosUser';
import {User} from '../../models/user';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  // profileData: FirebaseObjectObservable<datosUser>;
  usuario = {} as datosUser; 
  user = {} as User;
  constructor(/*private afAuth: AngularFireAuth,*/ public navCtrl: NavController,/* private afDB: AngularFireDatabase*/) {
    var tmp = document.getElementById('menu-heading1');
    this.ionViewWillLoad();
  }
  ionViewWillLoad(){
    // this.afAuth.authState.take(1).subscribe(data=>{
    //     this.profileData=this.afDB.object(`profile/${data.uid}`)
    // })
  }
  regresar(params){
    if (!params) params = {};
    // this.afAuth.authState.take(1).subscribe( auth => {
    //   this.afDB.object(`profile/${auth.uid}`).set(this.usuario)
    //     .then (()=> this.navCtrl.setRoot(TabsControllerPage) )
    //   })
  }
}

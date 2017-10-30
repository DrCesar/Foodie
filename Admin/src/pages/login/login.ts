import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../../models/user';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private alertCtrl: AlertController) {

  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }goToTabsController(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
  async login(user:User){
    //try{
    //const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
    //console.log(result);
    this.goToInicio(user);
    //}
    //catch(e){
    //  this.presentAlert();
    //  console.log(e);
    //}
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Correo o contraseña inválida.',
      buttons: ['Ok']
    });
    alert.present();
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecuperarContraseAPage } from '../recuperar-contrase-a/recuperar-contrase-a';
import { InicioPage } from '../inicio/inicio';
import { CategorAsPage } from '../categor-as/categor-as';
import { PlatosPage } from '../platos/platos';;
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../../models/user';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController/*, private afAuth: AngularFireAuth*/, private alertCtrl: AlertController) {
    
  }
  goToRecuperarContraseA(params){
    if (!params) params = {};
    this.navCtrl.push(RecuperarContraseAPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToTabsController(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }goToCategorAs(params){
    if (!params) params = {};
    this.navCtrl.push(CategorAsPage);
  }goToPlatos(params){
    if (!params) params = {};
    this.navCtrl.push(PlatosPage);
  }
  async login(user:User){
    try{
    // const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
    // console.log(result);
    this.goToTabsController(user);
    }
    catch(e){
      this.presentAlert();
      console.log(e);
    }
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

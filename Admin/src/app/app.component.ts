import { InicioPage } from '../pages/inicio/inicio';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { EditarMenuPage } from '../pages/editar-menu/editar-menu';
import { RevisarPedidosPage } from '../pages/revisar-pedidos/revisar-pedidos';
import { AcercaDeFoodiePage } from '../pages/acerca-de-foodie/acerca-de-foodie';
import { PedidosRecientesPage } from '../pages/pedidos-recientes/pedidos-recientes';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import {datosUser} from '../models/datosUser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = LoginPage;

  profileData: FirebaseObjectObservable<datosUser>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private afAuth:AngularFireAuth,
     private afDatabase: AngularFireDatabase) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      var tmp = document.getElementById('menu-heading1');
      this.ionViewWillLoad();
    });
  }
  ionViewWillLoad(){
    //this.afAuth.authState.take(1).subscribe(data=>{
    //    this.profileData=this.afDatabase.object(`profile/${data.uid}`)
    //})
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }goToAcercaDeFoodie(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AcercaDeFoodiePage);
  }goToPedidosRecientes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PedidosRecientesPage);
  }
  goToRevisarPedidos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RevisarPedidosPage);
  }
  cerrarSesion(){
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }
}

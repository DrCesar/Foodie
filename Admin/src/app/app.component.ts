import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { RecuperarContraseAPage } from '../pages/recuperar-contrase-a/recuperar-contrase-a';
import { LoginPage } from '../pages/login/login';
import { InicioPage } from '../pages/inicio/inicio';
import { CategorAsPage } from '../pages/categor-as/categor-as';
import { PlatosPage } from '../pages/platos/platos';
import { AcercaDeFoodiePage } from '../pages/acerca-de-foodie/acerca-de-foodie';
import { ResultadosDeBSquedaPage } from '../pages/resultados-de-bsqueda/resultados-de-bsqueda';
import { PedidoAnteriorPage } from '../pages/pedido-anterior/pedido-anterior'
import { PedidosRecientesPage } from '../pages/pedidos-recientes/pedidos-recientes';
import { PerfilPage } from '../pages/perfil/perfil';
import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import {datosUser} from '../models/datosUser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
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

  }
  goToRestaurantesPage(params){
    if(!params) params={};
    this.navCtrl.setRoot(RestaurantesPage);
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToRecuperarContraseA(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RecuperarContraseAPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }goToCategorAs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CategorAsPage);
  }goToPlatos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PlatosPage);
  }goToAcercaDeFoodie(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AcercaDeFoodiePage);
  }goToResultadosDeBSqueda(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ResultadosDeBSquedaPage);
  }goToPedidosRecientes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PedidosRecientesPage);
  }goToPedidoAnterior(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PedidoAnteriorPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }
  cerrarSesion(){
    this.navCtrl.setRoot(LoginPage);
  }
}

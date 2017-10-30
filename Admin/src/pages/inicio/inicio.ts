import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {datosUser} from '../../models/datosUser';
import { LoginPage } from '../login/login';
import { AcercaDeFoodiePage } from '../acerca-de-foodie/acerca-de-foodie';
import {EditarMenuPage} from '../editar-menu/editar-menu';
import { PedidosRecientesPage } from '../pedidos-recientes/pedidos-recientes';
import { RevisarPedidosPage } from '../revisar-pedidos/revisar-pedidos';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  profileData: FirebaseObjectObservable<datosUser>;
  items: FirebaseListObservable<any[]>;
  constructor(private afAuth:AngularFireAuth, public navCtrl: NavController, private afDB: AngularFireDatabase, private toast: ToastController) {
    this.items = afDB.list('/Categorias');
    this.ionViewWillLoad();
  }
  ionViewWillLoad(){
    //this.afAuth.authState.take(1).subscribe(data=>{
        //this.profileData=this.afDB.object(`profile/${data.uid}`)
    //})
  }
  goToAcercaDeFoodie(params){
    if (!params) params = {};
    this.navCtrl.push(AcercaDeFoodiePage);
  }
  cerrarSesion(){
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }
  goToEditarMenu(params){
    if (!params) params = {};
    this.navCtrl.push(EditarMenuPage);
  }
  goToPedidosRecientes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PedidosRecientesPage);
  }
  goToRevisarPedidos(params){
    if (!params) params = {};
    this.navCtrl.push(RevisarPedidosPage);
  }
}

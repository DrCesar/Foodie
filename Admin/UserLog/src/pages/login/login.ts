import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
 
import { UserProfilePage } from '../user-profile/user-profile';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('email') email;
	@ViewChild('password') pword;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

	login() {
		if(this.email.value != "" && this.pword.value != ""){
			
			this.fire.auth.signInWithEmailAndPassword(this.email.value, this.pword.value)
			.then(data => {
				this.navCtrl.push( UserProfilePage )
			})
			.catch(error => {
				let alert = this.alertCtrl.create({
					title: 'Error',
					subTitle: 'Wrong Email or Password',
					buttons: ['OK'],
				});
				alert.present();
			})
		}
	}
}

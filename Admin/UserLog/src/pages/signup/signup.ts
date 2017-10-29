import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'; 


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	@ViewChild('email') email;
	@ViewChild('password') pword;

	constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad SignupPage');
	}

	signUp() {
		if(this.email.value != "" && this.pword.value != "") {

			this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.pword.value)
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				let alert = this.alertCtrl.create({
					title: 'Error',
					subTitle: error.message,
					buttons: ['OK']
				})
				alert.present();
			})

		}
	}

}

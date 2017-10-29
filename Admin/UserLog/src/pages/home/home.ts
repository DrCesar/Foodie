import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  login() {
  	this.navCtrl.push(LoginPage);
  }

  signup() {
  	this.navCtrl.push(SignupPage);
  }


}

import {Component, ViewChild} from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import { RegisterPage} from '../register/register';
import { LoginPage} from '../login/login';
import {MedicinePage} from "../medicine/medicine";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild("search") search;
    data:string;
    items:any;


    constructor(public navCtrl: NavController, public alertCtrl: AlertController,
                public loading: LoadingController) {
    }
  OnGoToLogin(){
    this.navCtrl.push(LoginPage);
    }

  OnGoToRegister(){
    this.navCtrl.push(RegisterPage);
    }

    SearchIn(){
//// check to confirm the username and password fields are filled
        if(this.search.value=="" ){
            let alert = this.alertCtrl.create({
                title:"ATTENTION",
                subTitle:"search field is empty",
                buttons: ['OK']
            });
            alert.present();

        }else{
            let data = {
                    search: this.search.value
                };
            this.navCtrl.push(MedicinePage,data);
        }

    }
}

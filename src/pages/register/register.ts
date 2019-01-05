import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,AlertController} from 'ionic-angular';
import { LoginPage} from '../login/login';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild("username") fname;
  @ViewChild("town") town;
  @ViewChild("mobile") mobile;
  @ViewChild("email") email;
  @ViewChild("password") password;
  @ViewChild("confirmPassword") confirmPassword;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              private http: Http,  public loading: LoadingController
             ) {

  }

  Register(){
//// check to confirm the username, email, telephone and password fields are filled
if(this.fname.value=="" ){
      let alert = this.alertCtrl.create({
      title:"ATTENTION",
      subTitle:"Username field is empty",
      buttons: ['OK']

      });

alert.present();
} else
if(this.town.value==""){

    let alert = this.alertCtrl.create({
        title:"ATTENTION",
        subTitle:"Town field is empty",
        buttons: ['OK']

    });

    alert.present();
}
else
if(this.mobile.value==""){

    let alert = this.alertCtrl.create({
        title:"ATTENTION",
        subTitle:"Mobile number field is empty",
        buttons: ['OK']

    });

    alert.present();
}
else
if(this.mobile.value.length!=10){

    let alert = this.alertCtrl.create({
        title:"ATTENTION",
        subTitle:"invalid mobile number",
        buttons: ['OK']

    });

    alert.present();
}

else
if(this.email.value==""){

    let alert = this.alertCtrl.create({
        title:"ATTENTION",
        subTitle:"Email field is empty",
        buttons: ['OK']

    });

alert.present();
}

else


if(this.password.value=="") {
    let alert = this.alertCtrl.create({
        title: "ATTENTION",
        subTitle: "Password field is empty",
        buttons: ['OK']

    });
    alert.present();
}
else


    if(this.password.value==""){
        let alert = this.alertCtrl.create({
            title:"ATTENTION",
            subTitle:"Password field is empty",
            buttons: ['OK']

        });

alert.present();
}
else
    if(this.password.value.length<6) {
        let alert = this.alertCtrl.create({
            title: "ATTENTION",
            subTitle: "Password length at least 6 characters",
            buttons: ['OK']

        });
        alert.present();
    }
    else
      if(this.confirmPassword.value ==""){
          let alert = this.alertCtrl.create({
              title:"ATTENTION",
              subTitle:"Confirm Password field is empty",
              buttons: ['OK']

          });

          alert.present();
      }



    else
    if(this.confirmPassword.value!=this.password.value){
        let alert = this.alertCtrl.create({
            title:"ATTENTION",
            subTitle:"mismatch confirm password",
            buttons: ['OK']

        });

        alert.present();
    }

else{

var headers = new Headers();
headers.append("Accept", 'application/json');
headers.append('Content-Type', 'application/json' );
let options = new RequestOptions({ headers: headers });

    let data = {

        fname: this.fname.value,
        town: this.town.value,
        mobile: this.mobile.value,
        email: this.email.value,
        password: this.password.value
    };

let loader = this.loading.create({
content: 'Processing please wait…',

});



loader.present().then(() => {
this.http.post('http://localhost/myApp/register.php',data, options)


        .map(res => res.json())
        .subscribe(res => {
        loader.dismiss();

                //
                // let alert = this.alertCtrl.create({
                //     title: res
                //
                // });
                // alert.present();

        if(res==1){
        let alert = this.alertCtrl.create({
        title:"CONGRATS",
        subTitle:("you suceessfull register"),
        buttons: ['OK']

        });

        alert.present();
        this.navCtrl.push(LoginPage);
        }else{

        let alert = this.alertCtrl.create({
        title:"ERROR",
        subTitle:("unsuccessful,you are already registered"),
        buttons: ['OK']

        });
        alert.present();

        }
        });
        });
        }

        }

          ionViewDidLoad() {
            console.log('ionViewDidLoad RegisterPage');
          }

}

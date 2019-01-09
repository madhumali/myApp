import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http, Headers, RequestOptions} from "@angular/http";
import {LoadingController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {CameraPage} from "../camera/camera";
import {SMS} from '@ionic-native/sms';
import {CallNumber} from "@ionic-native/call-number";
import {SmsPage} from '../sms/sms';

import {HomePage} from '../home/home';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {
    data: any;
    fname: any;
    items: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public loading: LoadingController, private sms: SMS, private callSve: CallNumber, public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProfilePage');
    }

    OnGoToCamera() {
        this.navCtrl.push(CameraPage);
    }

    OnGoToSms() {
        this.navCtrl.push(SmsPage);
    }

    logout() {//to exit app
        //creating an alert before exiting app
        let alert = this.alertCtrl.create({
            title: 'Confirm exit',
            message: 'You are about to log out the app?',

            buttons: [
                {
                    text: 'Confirm',
                    role: ' exitApp()',
                    handler: () => {
                        this.exitApp();
                    }
                },
                {
                    text: 'Stay',
                    role: 'Stay',
                    handler: () => {
                        console.log('Stay clicked');
                    }
                }
            ]
        });
        alert.present();
    }

    exitApp() {
        this.navCtrl.push(HomePage);
    }

    ngOnInit() {
        this.fname = this.navParams.get('fname');

        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});

        let data = {
            fname: this.fname

        };


        let loader = this.loading.create({
            content: 'Processing please wait...',
        });

        loader.present().then(() => {
            this.http.post('http://192.168.1.115/myApp/retrieve_data.php', data, options)
            //this.http.post('http://edomonitor.com/school-evaluation-api/retrieve_data.php',data, options)

                .map(res => res.json())
                .subscribe(res => {

                    loader.dismiss()
                    this.items = res.server_response;

                    console.log(this.items);
                });
        });


    }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
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
data:any;
fname:any;
items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private http: Http,  public loading: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  ngOnInit(){
    this.fname = this.navParams.get('fname');

var headers = new Headers();
headers.append("Accept", 'application/json');
headers.append('Content-Type', 'application/json' );
let options = new RequestOptions({ headers: headers });

let data = {
    fname: this.fname

  };


let loader = this.loading.create({
content: 'Processing please wait...',
});

loader.present().then(() => {
this.http.post('http://localhost/myApp/retrieve_data.php',data, options)
//this.http.post('http://edomonitor.com/school-evaluation-api/retrieve_data.php',data, options)

.map(res => res.json())
    .subscribe(res => {

     loader.dismiss()
    this.items=res.server_response;

    console.log(this.items);
    });
    });


     }
}

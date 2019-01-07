import { Component } from '@angular/core';
import{SMS} from '@ionic-native/sms';
import{ CallNumber } from "@ionic-native/call-number";
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';


@Component({
  selector: 'page-sms',
  templateUrl: 'sms.html',
})
export class SmsPage {

  phoneNumber:number;
  textMessage:string;

  constructor(public navCtrl: NavController,private sms:SMS,private callSve:CallNumber,private toastCtrl: ToastController) {

  }

  call(){
  this.callSve.callNumber('0715159081',true).then(()=>{
  		console.log('call worked');
  }).catch((err) =>{
  	alert(JSON.stringify(err))
  });
  }


  //senSMS()

  /*sendTextMessage(){

  var options:{
  	replaceLineBreaks:true,
  	android:{
  		intent:'INTENT'
  	}
  }
  this.sms.send('0715159081','Message',options).then(()=>{
  	console.log('sms worked');
  }).catch((err) =>{
  	alert(JSON.stringify(err))
  });
  }*/



  async sendTextMessage() {
    try{

    
      await this.sms.send(String(this.phoneNumber),this.textMessage);
      const successToast = this.toastCtrl.create({
        message: "Text message sent successfully",
        duration: 3000
      });
      successToast.present();
    }catch(e){
      const errorToast = this.toastCtrl.create({
        message: "",
        duration: 3000
      });
      errorToast.present();
    }
  }
    
//'this.text.number', 'this.text.message'


  
}

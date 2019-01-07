import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage} from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';
import{ProfilePage} from '../pages/profile/profile';
import{IonicStorageModule} from '@ionic/storage';
import{HttpClientModule} from '@angular/common/http';
import {MedicinePage} from "../pages/medicine/medicine";
import {TestPage} from "../pages/test/test";

import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import {CameraPage} from "../pages/camera/camera";
import{SMS}from '@ionic-native/sms';
import{ CallNumber } from "@ionic-native/call-number";
import { SmsPage } from "../pages/sms/sms";



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    TabsPage,
    MedicinePage,
    TestPage,
    CameraPage,
    SmsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    TabsPage,
    MedicinePage,
    TestPage,
    CameraPage,
    SmsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera, FileTransfer, File,
    SMS,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

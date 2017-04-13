import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Page1 } from '../pages/page1/page1';
import { TopicsListPage } from '../pages/page2/page2';
import { TopicDetailPage } from '../pages/topicDetailPage/topicDetailPage';
import { DataService } from '../providers/data-service';
import { MyLocalStorage } from '../providers/my-local-storage';
import { ExplanationModal } from '../modals/explanationModal';
import { IonicStorageModule } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';

import {
  CognitoUtil,
  UserLoginService,
  UserParametersService,
  UserRegistrationService
} from "../providers/cognito.service";
import {AwsUtil} from "../providers/aws.service";
import {
  LoginPage,
  LogoutPage,
  RegisterPage,
  ConfirmRegistrationPage,
  ResendCodePage,
  ForgotPasswordStep1Page,
  ForgotPasswordStep2Page
} from "../pages/auth/auth";
// import {Storage} from "@ionic/storage";
import {EventsService} from "../providers/events.service";






@NgModule({
  declarations: [
    MyApp,
    Page1,
    TopicsListPage,
    TopicDetailPage,
    ExplanationModal,
    LoginPage,
    LogoutPage,
    RegisterPage,
    ConfirmRegistrationPage,
    ResendCodePage,
    ForgotPasswordStep1Page,
    ForgotPasswordStep2Page
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    TopicsListPage,
    TopicDetailPage,
    ExplanationModal,
    LoginPage,
    LogoutPage,
    RegisterPage,
    ConfirmRegistrationPage,
    ResendCodePage,
    ForgotPasswordStep1Page,
    ForgotPasswordStep2Page

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService,
    CognitoUtil,
    AwsUtil,
    UserLoginService,
    UserParametersService,
    UserRegistrationService,
    MyLocalStorage,
    EventsService,
    NativeStorage
  ]
})
export class AppModule {}

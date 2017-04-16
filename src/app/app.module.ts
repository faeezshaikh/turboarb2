import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContactUsPage } from '../pages/contactUsPage/contactUsPage';
import { TopicsListPage } from '../pages/page2/page2';
import { TopicDetailPage } from '../pages/topicDetailPage/topicDetailPage';
import { DataService } from '../providers/data-service';
import { MyLocalStorage } from '../providers/my-local-storage';
import { ExplanationModal } from '../modals/explanationModal';
import { IonicStorageModule } from '@ionic/storage';
import { SimpleTimer } from 'ng2-simple-timer';
import { SocialSharing } from '@ionic-native/social-sharing';

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
import {EventsService} from "../providers/events.service";


@NgModule({
  declarations: [
    MyApp,
    ContactUsPage,
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
    ContactUsPage,
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
    SimpleTimer,
    SocialSharing
    // NativeStorage
  ]
})
export class AppModule {}

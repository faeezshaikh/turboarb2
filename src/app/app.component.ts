import { Component, ViewChild } from '@angular/core';
import { Events, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Page1 } from '../pages/page1/page1';
import { TopicsListPage } from '../pages/page2/page2';


import {LoginPage, LogoutPage} from "../pages/auth/auth";
import {AwsUtil} from "../providers/aws.service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TopicsListPage;
  pages: Array<{title: string, component: any, icon: string}>;

  public loginPage = LoginPage;
  public logoutPage = LogoutPage;
  // public homePage = ControlPanelPage;
  // public settingsPage = ControlPanelPage;

  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public events:Events,
              public awsUtil:AwsUtil,
              public menu:MenuController) {
    this.initializeApp();

    this.pages = [
      { title: 'Practice Exams', component: TopicsListPage, icon: 'list' },
      { title: 'Contact Us', component: Page1, icon: 'people' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

       this.awsUtil.initAwsService();
       this.rootPage = this.loginPage;
       this.listenToLoginEvents();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    // this.nav.setRoot(page);
  }

    openPage2(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
    // this.nav.setRoot(page);
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });


    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }
}

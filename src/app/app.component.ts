import { Component, ViewChild } from '@angular/core';
import { Events, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContactUsPage } from '../pages/contactUsPage/contactUsPage';
import { TopicsListPage } from '../pages/topicsListPage/topicsListPage';
import { VideosPage } from '../pages/videos/videos';
import {WhitepapersPage } from '../pages/whitepapers/whitepapers';

import {LoginPage, LogoutPage} from "../pages/auth/auth";
import {AwsUtil} from "../providers/aws.service";
import {MyDataService} from '../providers/my-data-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TopicsListPage;
  pages: Array<{title: string, component: any, icon: string}>;
  loggedInUserEmail: string;

  public loginPage = LoginPage;
  public logoutPage = LogoutPage;
  
  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public events:Events,
              public awsUtil:AwsUtil,
              public menu:MenuController,
              public dataService: MyDataService) {
    this.initializeApp();

    this.pages = [
      { title: 'Projects', component: TopicsListPage, icon: 'list' },
      { title: 'Video Resources', component: VideosPage, icon: 'logo-youtube' },
      { title: 'Other Resources', component: WhitepapersPage, icon: 'folder' },
      { title: 'Contact Us', component: ContactUsPage, icon: 'people' }
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
        this.nav.setRoot(page);
        this.menu.close();
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.dataService.getLoggedInUserEmail().then((data) => {
        this.loggedInUserEmail = data;
      });
      this.enableMenu(true);
    });


    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(loggedIn, 'menu2');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }
}

import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Page3 } from '../page3/page3';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class TopicsListPage {
  selectedItem: any;
  icons: string[];
  topics: Array<{no: number, title: string, note: string, icon: string}> = [
                            {no:1,title : 'Practice Set 1',note:'10 questions, 15 minutes',icon:'../../assets/img/IAM.png'},
                            {no:2,title : 'Practice Set 2',note:'10 questions, 15 minutes',icon:'../../assets/img/S3.png'},
                            {no:3,title : 'Practice Set 3',note:'10 questions, 15 minutes',icon:'../../assets/img/SNS.png'},
                            {no:4,title : 'Practice Set 4',note:'10 questions, 15 minutes',icon:'../../assets/img/SQS.png'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  itemTapped(event, topic) {
    this.navCtrl.push(Page3, {
      topic: topic
    });
  }
}

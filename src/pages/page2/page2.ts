import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Page3 } from '../page3/page3';
import { reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class TopicsListPage {
  selectedItem: any;
  icons: string[];
  topics: Array<{no: number, title: string, note: string, icon: string}>;



  exams: Array<{no: number, title: string, note: string, icon: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

      this.topics = [
                            {no:1,title : 'Practice Set 1',note:'10 questions, 15 minutes',icon:'../../assets/img/IAM.png'},
                            {no:2,title : 'Practice Set 2',note:'10 questions, 15 minutes',icon:'../../assets/img/S3.png'},
                            {no:3,title : 'Practice Set 3',note:'10 questions, 15 minutes',icon:'../../assets/img/SNS.png'},
                            {no:4,title : 'Practice Set 4',note:'10 questions, 15 minutes',icon:'../../assets/img/SQS.png'}];



  this.exams = [
                            {no:1,title : 'Exam Set 1',note:'10 questions, 15 minutes',icon:'../../assets/img/IAM.png'},
                            {no:2,title : 'Exam Set 2',note:'10 questions, 15 minutes',icon:'../../assets/img/S3.png'},
                            {no:3,title : 'Exam Set 3',note:'10 questions, 15 minutes',icon:'../../assets/img/SNS.png'}];

  }

  itemTapped(event, topic) {
    this.navCtrl.push(Page3, {
      topic: topic
    });
  }

  reorderTopics(indexes) {
    console.log('ReORDER:' , indexes);
    this.topics = reorderArray(this.topics, indexes);
  }

   reorderExams(indexes) {
    console.log('ReORDER:' , indexes);
    this.exams = reorderArray(this.exams, indexes);
  }
}

import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { TopicDetailPage } from '../topicDetailPage/topicDetailPage';
import { reorderArray } from 'ionic-angular';
import { MyLocalStorage } from '../../providers/my-local-storage';

import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class TopicsListPage {
  selectedItem: any;
  icons: string[];
  topics: Array<{ no: number, title: string, note: string, icon: string, hiScore: string }>;
  reorder: boolean = false;
  reorderIcon: string = "options";

  exams: Array<{ no: number, title: string, note: string, icon: string, hiScore: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: MyLocalStorage,private socialSharing: SocialSharing) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.topics = [
      { no: 1, title: 'Practice Set 1', note: '10 questions, 17 minutes', icon: '../../assets/img/IAM.png', hiScore: '' },
      { no: 2, title: 'Practice Set 2', note: '10 questions, 15 minutes', icon: '../../assets/img/S3.png', hiScore: '' },
      { no: 3, title: 'Practice Set 3', note: '10 questions, 15 minutes', icon: '../../assets/img/SNS.png', hiScore: '' },
      { no: 4, title: 'Practice Set 4', note: '10 questions, 15 minutes', icon: '../../assets/img/SQS.png', hiScore: '' }];



    this.exams = [
      { no: 1, title: 'Exam Set 1', note: '10 questions, 15 minutes', icon: '../../assets/img/IAM.png', hiScore: '' },
      { no: 2, title: 'Exam Set 2', note: '10 questions, 15 minutes', icon: '../../assets/img/S3.png', hiScore: '' },
      { no: 3, title: 'Exam Set 3', note: '10 questions, 15 minutes', icon: '../../assets/img/SNS.png', hiScore: '' }];

    this.getHiScores();

  }

  ionViewWillEnter() {
    console.log("View Will Enter");
    this.getHiScores();

  }

  itemTapped(event, topic) {
    this.navCtrl.push(TopicDetailPage, {
      topic: topic
    });
  }

  reorderNow() {
    this.reorder = !this.reorder;
    this.reorderIcon = this.reorder ? "close-circle" : "options";
  }

  reorderTopics(indexes) {
    console.log('ReORDER:', indexes);
    this.topics = reorderArray(this.topics, indexes);
  }

  reorderExams(indexes) {
    console.log('ReORDER:', indexes);
    this.exams = reorderArray(this.exams, indexes);
  }

  getHiScores() {
    // console.log('Retrieving HiScore');
    this.topics.forEach(topic => {
      this.storage.getScore(topic.no).then(result => {
        topic.hiScore = result;
        console.log('Retrieving Topics Score ...Set Topics ' + topic.no + ' hiscore to:' + result);
        // console.log('TOPIC:',topic);

      })

    });
  }


  /////// [Social Sharing ] ///////

  shareViaMail() {
    console.log('In Share Via Email');
    
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
       // Share via email
          this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
            // Success!
          }).catch(() => {
            // Error!
            console.log('Sharing Via Email was Possible but there was some issue');
          });
    }).catch(() => {
      // Sharing via email is not possible
      console.log('Sharing Via Email not Possible');
      
    });
  }


  shareViaTwitter() {
    console.log('In Share Via Twitter');
    
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
       // Share via email
          this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
            // Success!
          }).catch(() => {
            // Error!
            console.log('Sharing Via Email was Possible but there was some issue');
          });
    }).catch(() => {
      // Sharing via email is not possible
      console.log('Sharing Via Email not Possible');
      
    });
  }


  shareViaFacebook() {
    console.log('In Share Via Email');
    
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
       // Share via email
          this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
            // Success!
          }).catch(() => {
            // Error!
            console.log('Sharing Via Email was Possible but there was some issue');
          });
    }).catch(() => {
      // Sharing via email is not possible
      console.log('Sharing Via Email not Possible');
      
    });
  }


  shareViaGoogle() {
    console.log('In Share Via Email');
    
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
       // Share via email
          this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
            // Success!
          }).catch(() => {
            // Error!
            console.log('Sharing Via Email was Possible but there was some issue');
          });
    }).catch(() => {
      // Sharing via email is not possible
      console.log('Sharing Via Email not Possible');
      
    });
  }
}

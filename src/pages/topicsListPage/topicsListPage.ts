import { Component,ViewChild } from '@angular/core';

import { ModalController,NavController, NavParams ,AlertController,Content,ToastController} from 'ionic-angular';
import { TopicDetailPage } from '../topicDetailPage/topicDetailPage';
import { reorderArray } from 'ionic-angular';
import { MyLocalStorage } from '../../providers/my-local-storage';
import { ExamStartingModal} from '../../modals/examStartingModal';

import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-page2',
  templateUrl: 'topicsListPage.html'
})
export class TopicsListPage {
  selectedItem: any;
  icons: string[];
  topics: Array<{ no: number, title: string, note: string, icon: string, hiScore: string }>;
  reorder: boolean = false;
  reorderIcon: string = "options";
  @ViewChild(Content) content: Content;

  exams: Array<{ no: number, title: string, note: string, icon: string, hiScore: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: MyLocalStorage,
              private socialSharing: SocialSharing,private alertCtrl: AlertController,public toastCtrl: ToastController,public modalCtrl: ModalController) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.topics = [
      { no: 1, title: 'H.A. & Business Continuity', note: '10 questions, 17 minutes', icon: 'assets/img/VPC.png', hiScore: '' },
      { no: 2, title: 'Costing', note: '10 questions, 15 minutes', icon: 'assets/img/S3.png', hiScore: '' },
      { no: 3, title: 'Deployment Management', note: '10 questions, 15 minutes', icon: 'assets/img/SNS.png', hiScore: '' },
      { no: 4, title: 'Network Design', note: '10 questions, 15 minutes', icon: 'assets/img/SQS.png', hiScore: '' },
      { no: 5, title: 'Data Storage', note: '10 questions, 15 minutes', icon: 'assets/img/RDS.png', hiScore: '' },
      { no: 6, title: 'Security', note: '10 questions, 15 minutes', icon: 'assets/img/IAM.png', hiScore: '' },
      { no: 7, title: 'Scalability & Elasticity', note: '7` questions, 15 minutes', icon: 'assets/img/EC2.png', hiScore: '' },
      { no: 8, title: 'Cloud Migration & Hybrid Arch', note: '8 questions, 15 minutes', icon: 'assets/img/CloudFormation.png', hiScore: '' }];



    this.exams = [
      { no: 9, title: 'Exam Set 1', note: '10 questions, 15 minutes', icon: 'assets/img/EC2.png', hiScore: '' },
      { no: 10, title: 'Exam Set 2', note: '10 questions, 15 minutes', icon: 'assets/img/VPC.png', hiScore: '' },
      { no: 11, title: 'Exam Set 3', note: '10 questions, 15 minutes', icon: 'assets/img/VPC.png', hiScore: '' }];

    this.getHiScores();

  }

  scrollToTop() {
    if(this.content)
        this.content.scrollToTop();
  }

  ionViewWillEnter() {
    console.log("View Will Enter");
    this.getHiScores();

  }

  itemTapped(event, topic) {
    if(topic.no > 8) {
      this.openModal(topic);
    } else {
     this.startExam(topic); 
    }
  }

  startExam(topic) {
     this.navCtrl.push(TopicDetailPage, {
      topic: topic
    });
  }

    openModal(topic) {
    let modal = this.modalCtrl.create(ExamStartingModal,null,{'enableBackdropDismiss':true});
     modal.onDidDismiss(data => {
      console.log(data);
      if (data && data.cancel) {
        console.log('Cancel hit');
        // Modal crashing issue. Hence catch all : https://github.com/driftyco/ionic/issues/10046
         modal.dismiss().catch(() => {
        console.log("Loading dismissed");
      });;
      } else if (data && !data.cancel) {
        this.startExam(topic);
      }
   });
    modal.present();
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

  shareMsg = "I thought you'd find this app useful for preparing for the AWS Certified Solution Architect - Professional Exam. Check out this app in app store. ";
  shareViaFacebook() {
    console.log('In Share Via Facebook');
    this.socialSharing.shareViaFacebook(this.shareMsg, "assets/img/EC2.png", null).then(() => {
            // Success!
          }).catch(() => {
            // Error!
            let msg = 'Sharing via Facebook not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
          });;
  }

  shareViaTwitter() {
    console.log('In Share Via Twitter');
     this.socialSharing.shareViaTwitter(this.shareMsg, "assets/img/EC2.png", null).then(() => {
            // Success!
          }).catch(() => {
            // Error!
            let msg = 'Sharing via Twitter not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
          });
  }

  shareViaWhatsapp() {
    console.log('In Share Via WhatsApp');
    this.socialSharing.shareViaWhatsApp(this.shareMsg,  "assets/img/EC2.png", null).then(() => {
            // Success!
          }).catch(() => {
            // Error!
            let msg = 'Sharing via WhatsApp not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
          });;
  }


  shareViaInstagram() {
    console.log('In Share Via Instagram');
    this.socialSharing.shareViaInstagram(this.shareMsg,  "assets/img/EC2.png").then(() => {
            // Success!
          }).catch(() => {
            // Error!
            let msg = 'Sharing via Instagram not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
          });;
  }

  shareViaSMS() {
    console.log('In Share via SMS');
    this.socialSharing.shareViaSMS(this.shareMsg, "").then(() => {
            // Success!
          }).catch(() => {
            // Error!
            let msg = 'Sharing via SMS not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
          });;
  }

   regularShare(){
    // share(message, subject, file, url)
    this.socialSharing.share(this.shareMsg, null, "assets/img/EC2.png", null).then(() => {
            // Success!
          }).catch(() => {
            // Error!
            let msg = 'Oops. There was some issue while opening your share slide.';
            console.log(msg);
            this.presentToast(msg);
          });; 
  }

   shareViaMail() {
    console.log('In Share Via Email');
    
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
       // Share via email
          this.socialSharing.shareViaEmail(this.shareMsg, 'AWS Sol. Arch Professional', ['']).then(() => {
            // Success!
          }).catch(() => {
            // Error!
            let msg = 'Sharing via email was possible but there was some issue.';
            console.log(msg);
            this.presentToast(msg);
          });
    }).catch(() => {
      // Sharing via email is not possible
      let msg = 'Sharing via email not possible. Check if you have the appropriate app to share via email installed.';
      console.log(msg);
      this.presentToast(msg);
      
    });
  }


  presentAlert(msg) {
  let alert = this.alertCtrl.create({
    title: 'Yikes!',
    message: msg,
    buttons: [
      {
        text: 'OK',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  alert.present();
}

 presentToast(msg:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}

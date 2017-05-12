import { Component,ViewChild } from '@angular/core';

import { ModalController,NavController, NavParams ,AlertController,Content,ToastController} from 'ionic-angular';
import { TopicDetailPage } from '../topicDetailPage/topicDetailPage';
import { reorderArray , Platform} from 'ionic-angular';
import { MyLocalStorage } from '../../providers/my-local-storage';
import { ExamStartingModal} from '../../modals/examStartingModal';
import { DataService } from '../../providers/data-service';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: MyLocalStorage, public dataService: DataService,
              private socialSharing: SocialSharing,private alertCtrl: AlertController,public toastCtrl: ToastController,public modalCtrl: ModalController, public platform   : Platform,) {


    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.topics = dataService.getTopicsArray();

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
    let modal = this.modalCtrl.create(ExamStartingModal,topic,{'enableBackdropDismiss':true});
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
        // console.log('Retrieving Topics Score ...Set Topics ' + topic.no + ' hiscore to:' + result);

      })

    });
  }


  /////// [Social Sharing ] ///////

  // http://masteringionic.com/blog/2016-12-27-implementing-social-media-sharing-in-ionic-applications/?s=2016-12-27-implementing-social-media-sharing-in-ionic-2-applications/

  // shareMsg = "I thought you'd find this app useful for preparing for the AWS Certified Solution Architect - Professional Exam. Check out this app in app store. ";
  // fbUrl = 

   public sendTo   : any;
   public subject  : string = 'AWS Certified Sol. Arch - Professional';
   public shareMsg  : string = "I thought you'd find this app useful for preparing for the AWS Certified Solution Architect - Professional Exam. Check out this app in app store. ";
   public image     : string   = "assets/img/EC2.png";
   public fbUrl      : string   ="https://www.facebook.com/awsarchitect";

  // shareViaFacebook() {
  //   console.log('In Share Via Facebook');
  //   this.socialSharing.shareViaFacebook(this.shareMsg, "assets/img/EC2.png", this.fbUrl).then(() => {
  //           // Success!
  //         }).catch(() => {
  //           // Error!
  //           let msg = 'Sharing via Facebook not possible. Check if you have the appropriate app installed.';
  //           console.log(msg);
  //           this.presentToast(msg);
  //         });;
  // }

   shareViaFacebook()
   {
      this.platform.ready()
      .then(() =>
      {
         this.socialSharing.canShareVia('com.apple.social.facebook', this.shareMsg, this.image, this.fbUrl)
         .then((data) =>
         {

            this.socialSharing.shareViaFacebook(this.shareMsg, this.image, this.fbUrl)
            .then((data) =>
            {
               console.log('Shared via Facebook');
            })
            .catch((err) =>
            {
                // Error!
            let msg = 'Sharing via Facebook not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
            });

         })
         .catch((err) =>
         {
             // Error!
            let msg = 'Sharing via Facebook not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
         });

      });
   }


  // shareViaTwitter() {
  //   console.log('In Share Via Twitter');
  //    this.socialSharing.shareViaTwitter(this.shareMsg, "assets/img/EC2.png", this.fbUrl).then(() => {
  //           // Success!
  //         }).catch(() => {
  //           // Error!
  //           let msg = 'Sharing via Twitter not possible. Check if you have the appropriate app installed.';
  //           console.log(msg);
  //           this.presentToast(msg);
  //         });
  // }



   shareViaTwitter()
   {
      this.platform.ready()
      .then(() =>
      {

         this.socialSharing.canShareVia('com.apple.social.twitter', this.shareMsg, this.image, this.fbUrl)
         .then((data) =>
         {

            this.socialSharing.shareViaTwitter(this.shareMsg, this.image, this.fbUrl)
            .then((data) =>
            {
               console.log('Shared via Twitter');
            })
            .catch((err) =>
            {
               // Error!
            let msg = 'Sharing via Twitter not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
            });

         });

      })
      .catch((err) =>
      {
         console.log('Not able to be shared via Twitter');
          // Error!
            let msg = 'Sharing via Twitter not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
      });
   }


  shareViaWhatsapp() {
    console.log('In Share Via WhatsApp');
    this.socialSharing.shareViaWhatsApp(this.shareMsg,  "assets/img/EC2.png", this.fbUrl).then(() => {
            // Success!
          }).catch(() => {
            // Error!
            let msg = 'Sharing via WhatsApp not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
          });;
  }


   shareViaInstagram()
   {
      this.platform.ready()
      .then(() =>
      {

         this.socialSharing.shareViaInstagram(this.shareMsg, this.image)
         .then((data) =>
         {
            console.log('Shared via shareViaInstagram');
         })
         .catch((err) =>
         {
             // Error!
            let msg = 'Sharing via Instagram not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
         });

      });
   }


  shareViaSMS() {
    console.log('In Share via SMS');
    this.socialSharing.shareViaSMS(this.shareMsg, this.fbUrl).then(() => {
            // Success!
          }).catch(() => {
            // Error!
            let msg = 'Sharing via SMS not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
          });;
  }

   regularShare()
   {
      this.platform.ready()
      .then(() =>
      {

         this.socialSharing.share(this.shareMsg, this.subject, this.image, this.fbUrl)
         .then((data) =>
         {
            console.log('Shared via SharePicker');
         })
         .catch((err) =>
         {
            console.log('Was not shared via SharePicker');
             let msg = 'Oops. There was some issue while opening your share slide.';
            console.log(msg);
            this.presentToast(msg);
         });

      });
   }




   shareViaMail() {
    console.log('In Share Via Email');
    
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
       // Share via email
          this.socialSharing.shareViaEmail(this.shareMsg + ' ' + this.fbUrl, 'AWS Sol. Arch Professional', ['']).then(() => {
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

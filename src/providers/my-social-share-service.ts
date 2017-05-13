import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform,ToastController} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Injectable()
export class MySocialShareService {

  constructor(public http: Http,private socialSharing: SocialSharing,public platform   : Platform,public toastCtrl: ToastController) {
    console.log('Hello MyLocalStorage Provider');
  }

   /////// [Social Sharing ] ///////

  // http://masteringionic.com/blog/2016-12-27-implementing-social-media-sharing-in-ionic-applications/?s=2016-12-27-implementing-social-media-sharing-in-ionic-2-applications/

   public sendTo   : any;
   public subject  : string = 'AWS Certified Sol. Arch - Professional';
   public shareMsg  : string = "I thought you'd find this app useful for preparing for the AWS Certified Solution Architect - Professional Exam. Check out this app in app store. ";
   public image     : string   = "assets/img/EC2.png";
   public fbUrl      : string   ="https://www.facebook.com/awsarchitect";


 presentToast(msg:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }


  shareViaFacebook() {
    console.log('In Share Via Facebook');
    this.socialSharing.shareViaFacebook(this.shareMsg, this.image, this.fbUrl).then(() => {
            // Success!
            console.log("Successfully shared via Facebook");
          }).catch(() => {
            // Error!
            let msg = 'Sharing via Facebook not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
          });;
  }

  //  shareViaFacebook()
  //  {
  //     this.platform.ready()
  //     .then(() =>
  //     {
  //        this.socialSharing.canShareVia('com.apple.social.facebook', this.shareMsg, this.image, this.fbUrl)
  //        .then((data) =>
  //        {

  //           this.socialSharing.shareViaFacebook(this.shareMsg, this.image, this.fbUrl)
  //           .then((data) =>
  //           {
  //              console.log('Shared via Facebook');
  //           })
  //           .catch((err) =>
  //           {
  //               // Error!
  //           let msg = 'Sharing via Facebook not possible. Check if you have the appropriate app installed.';
  //           console.log(msg);
  //           this.presentToast(msg);
  //           });

  //        })
  //        .catch((err) =>
  //        {
  //            // Error!
  //           let msg = 'Sharing via Facebook not possible. Check if you have the appropriate app installed.';
  //           console.log(msg);
  //           this.presentToast(msg);
  //        });

  //     });
  //  }


  shareViaTwitter() {
    console.log('In Share Via Twitter');
     this.socialSharing.shareViaTwitter(this.shareMsg, "assets/img/EC2.png", this.fbUrl).then(() => {
            // Success!
            console.log("Successfully shared via Twitter");
          }).catch(() => {
            // Error!
            let msg = 'Sharing via Twitter not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
          });
  }



  //  shareViaTwitter()
  //  {
  //     this.platform.ready()
  //     .then(() =>
  //     {

  //        this.socialSharing.canShareVia('com.apple.social.twitter', this.shareMsg, this.image, this.fbUrl)
  //        .then((data) =>
  //        {

  //           this.socialSharing.shareViaTwitter(this.shareMsg, this.image, this.fbUrl)
  //           .then((data) =>
  //           {
  //              console.log('Shared via Twitter');
  //           })
  //           .catch((err) =>
  //           {
  //              // Error!
  //           let msg = 'Sharing via Twitter not possible. Check if you have the appropriate app installed.';
  //           console.log(msg);
  //           this.presentToast(msg);
  //           });

  //        });

  //     })
  //     .catch((err) =>
  //     {
  //        console.log('Not able to be shared via Twitter');
  //         // Error!
  //           let msg = 'Sharing via Twitter not possible. Check if you have the appropriate app installed.';
  //           console.log(msg);
  //           this.presentToast(msg);
  //     });
  //  }


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

}

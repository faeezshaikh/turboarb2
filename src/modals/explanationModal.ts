import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  templateUrl: 'explanationModal.html'
})
export class ExplanationModal {

   question: any;
   answer: any;
   explanation: any;
   ref: any = "NA";

   constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private iab: InAppBrowser
  ) {
    this.explanation = params.get('Explanation');
    this.ref = params.get('Ref');
    this.question = params.get('Name');
    console.log("Explanation: ", this.explanation);
    console.log("Ref: ", this.ref);
  }

  openLink() {
    	// window.open(this.ref, '_blank', 'location=yes');
      // return false;
      this.platform.ready().then(() => {
        // let browser = new InAppBrowser(this.ref,'_blank');
        this.iab.create(this.ref,'_system',{location:'no',toolbar:'yes',hidden:'no'}); 

    });

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
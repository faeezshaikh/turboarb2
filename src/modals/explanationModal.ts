import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';



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
    public viewCtrl: ViewController
  ) {
    this.explanation = params.get('Explanation');
    this.ref = params.get('Ref');
    this.question = params.get('Name');
    console.log("Explanation: ", this.explanation);
    console.log("Ref: ", this.ref);
  }

  openLink() {
    	window.open(this.ref, '_system', 'location=yes');
			return false;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
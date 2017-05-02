import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';



@Component({
  templateUrl: 'examStartingModal.html'
})
export class ExamStartingModal {

   constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
  }

 

  dismiss(cancel) {
    let data = cancel ? { 'cancel': true } : { 'cancel': false};
    this.viewCtrl.dismiss(data);
  }


}
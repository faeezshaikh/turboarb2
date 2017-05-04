import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';



@Component({
  templateUrl: 'examStartingModal.html'
})
export class ExamStartingModal {

  note: string;
   constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.note = params.get('note');
  }

 

  dismiss(cancel) {
    let data = cancel ? { 'cancel': true } : { 'cancel': false};
    this.viewCtrl.dismiss(data);
  }


}
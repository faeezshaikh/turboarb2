import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';



@Component({
  templateUrl: 'examStartingModal.html'
})
export class ExamStartingModal {

  note: string;
  title:string;
  time:string;
   constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.note = params.get('note');
    this.title= params.get('title');
    this.time = params.get('time');
  }

 

  dismiss(cancel) {
    let data = cancel ? { 'cancel': true } : { 'cancel': false};
    this.viewCtrl.dismiss(data);
  }


}
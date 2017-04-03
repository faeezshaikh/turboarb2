import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  selectedItem: any;

  questions : string[] = ["first","second","third","fourth","fifth","sixth"];
  question: string = this.questions[0];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(navParams.get('item') != null) {
      this.selectedItem = navParams.get('item');
    } else {
      this.selectedItem = {note : "blah"};
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }


  shift(increment: number) {
    let ix = increment + this.questions.findIndex(c => c === this.question);
    ix = Math.min(this.questions.length - 1, Math.max(0, ix));
    this.question = this.questions[ix];
  }
  left() {
    this.shift(-1);
  }
  right() {
    this.shift(1);
  }

  isAnswered(index: number) {
    if(index % 2 == 0 ) return 'Answered';
  }
  goTo(index: number) {
    	if (index > 0 && index <= this.questions.length) {
        this.question = this.questions[index-1];
			}
			console.log("scrolling");
			// $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop(true);
  }
  

}

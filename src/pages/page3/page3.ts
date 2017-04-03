import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data-service';


@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  selectedTopic: any;

  questions: string[];
  question: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataService) {
    if (navParams.get('topic') != null) {
      this.selectedTopic = navParams.get('topic');
      this.questions = dataService.getQuestions(this.selectedTopic.no);
      this.question = this.questions[0];
    } else {
      this.selectedTopic = { note: "blah" };
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
    if (index % 2 == 0) return 'Answered';
  }
  goTo(index: number) {
    if (index > 0 && index <= this.questions.length) {
      this.question = this.questions[index - 1];
    }
    console.log("scrolling");
    // $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop(true);
  }


}

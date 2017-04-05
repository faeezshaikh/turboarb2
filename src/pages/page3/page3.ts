import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

import { Content } from 'ionic-angular';


@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  selectedTopic: any;

  data: any = {};
  questions: string[];
  question: string;
  showReview : boolean = false;
  scrollContent: any;
  mode: string = 'quiz';

  @ViewChild(Content) content: Content;
  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataService) {
    if (navParams.get('topic') != null) {
      this.selectedTopic = navParams.get('topic');

      dataService.getData(this.selectedTopic.no).then(theResult => {
          this.data =   theResult;
          this.questions = theResult.questions;
          this.question = this.questions[0];
          console.log("Data => ",this.data);
          console.log("Questions => ",theResult.questions);
        });
      
      // this.questions = dataService.getQuestions(this.selectedTopic.no);
      // this.question = this.questions[0];
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
    this.scrollToTop();
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
    this.mode = 'quiz';
  }



  setMode(mode) {
    this.mode = mode;
    console.log('Mode set to:', mode);
    this.scrollToTop();
    
  }


}

import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { MyLocalStorage } from '../../providers/my-local-storage';
// import { MyLocalStorage } from '../../providers/my-local-storage1';
import { ModalController, Content } from 'ionic-angular';
import { ExplanationModal } from '../../modals/explanationModal';
// import {TopicsListPage} from '../page2/page2';


@Component({
  selector: 'page-page3',
  templateUrl: 'topicDetailPage.html'
})
export class TopicDetailPage {
  selectedTopic: any;

  data: any = {};
  questions: any[];
  question: string;
  showReview : boolean = false;
  scrollContent: any;
  mode: string = 'quiz';
  
  verdict: string;
  correct: number = 0;
  score : number = 0;
  // theResult:any = {};

  @ViewChild(Content) content: Content;
  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public dataService: DataService,
              public modalCtrl: ModalController,
              public storage: MyLocalStorage) {
    if (navParams.get('topic') != null) {

      this.selectedTopic = navParams.get('topic');

      dataService.getData(this.selectedTopic.no).then(theResult => {
          this.data =   theResult;
          // if(theResult.questions){
            this.questions = theResult.questions;
            this.question = this.questions[0];
            console.log("Data => ",this.data);
            console.log("Questions => ",theResult.questions);
          // }
        });
      
    } else {
      this.selectedTopic = { note: "blah" };
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicDetailPage');
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

  
  isAnswered(question: any) {
	    var answered = 'Not Answered';
			question.Options.forEach(function (element, index, array) {
				if (element.Selected == true) {
					answered = 'Answered';
					return false;
				}
			});
			return answered;
  }

  goTo(index: number) {
    if (index > 0 && index <= this.questions.length) {
      this.question = this.questions[index - 1];
    }
    this.mode = 'quiz';
  }


  reset() {
    this.questions.forEach(function(q, index, array){
      	q.Options.forEach(function (option, index, array) {
            option.Selected = false;
			});
    });
    
  }

  setMode(mode) {
    this.mode = mode;
    console.log('Mode set to:', mode);
    this.scrollToTop();
    
  }

		toBoolVal(val:any){
			if (val == 'undefined' || val == null || val == '' || val == 'false' || val == 'False')
				return false;
			else if (val == true || val == 'true' || val == 'True')
				return true;
			// else
			// 	return 'unidentified';
		}
		;

  	isCorrect(question) {
      let result = 'Correct';
      let self = this;
			question.Options.forEach(function (option, index, array) {
        
				if (self.toBoolVal(option.Selected) != option.IsAnswer) {
          // if (option.Selected != option.IsAnswer) {
          result = 'Wrong';
					return false;
				}
			});
			return result;
		};


    closeResults() {
      // setMode('quiz');
      this.reset();
      this.navCtrl.pop();
      // this.navCtrl.push(TopicsListPage);
    }


    openExplanationModal(question) {
      let modal = this.modalCtrl.create(ExplanationModal, question);
    modal.present();
  }



  ////// [ Scoring ] ///////



	 calculateAndUpdateScore() {

			let wrong = 0;
      let that = this;
			// $scope.$broadcast('timer-stop');

			this.questions.forEach(function (q, index) {
				if (that.isCorrect(q) == 'Correct') {

				} else {
					wrong++;
				}

			});

			this.correct = this.questions.length - wrong;
			this.score = Math.round((Number(this.correct) / this.questions.length) * 100);
			this.verdict = (this.score > 65) ? 'Pass' : 'Fail';
			// awsService.updateScoreForTopics(examTopic, $scope.score);
			// $scope.mode.value = 'result';
      this.setMode('result');
      this.storage.saveScore(this.selectedTopic.no,this.score);
		}

    ////// [ Scoring ] ///////
}

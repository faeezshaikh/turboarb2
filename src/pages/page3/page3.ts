import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  selectedItem: any;

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

}

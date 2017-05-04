import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  topicMap: Map<number, string>;

  data: any = null;
  fileName: string;
  topics = [];

  constructor(public http: Http) {
    // console.log('Hello DataService Provider');
    this.topicMap = new Map<number, string>();
    this.topicMap.set(1, 'assets/data/ha&bc.js');
    this.topicMap.set(2, 'assets/data/costing.js');
    this.topicMap.set(3, 'assets/data/deploymentMgmt.js');
    this.topicMap.set(4, 'assets/data/networkDesign.js');
    this.topicMap.set(5, 'assets/data/dataStorage.js');
    this.topicMap.set(6, 'assets/data/security.js');
    this.topicMap.set(7, 'assets/data/scalability.js');
    this.topicMap.set(8, 'assets/data/cloudMigration.js');

    this.topicMap.set(9, 'assets/data/exam1.js');
    this.topicMap.set(10, 'assets/data/exam2.js');
    // this.topicMap.set(11, 'assets/data/exam3.js');

    
  }


  load(topic: number) {

    this.fileName = this.topicMap.get(topic);
    // console.log("FILENAME =>", this.fileName);
    
    // if (this.data) {
    //   return Promise.resolve(this.data);
    // }
    // if (!this.data) {
      return new Promise(resolve => {
        this.http.get(this.fileName)
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
  // }
  }


  getData(topic: number) {
  return this.load(topic).then(res => {
    this.data = res;
    return this.data;
  });
}

  getTopicsArray() {
    console.log(" ==== Getting Topics Array ====");
    
    
    class Topic {
      no: number;
      title: string;
      note: string;
      icon: string;
      hiScore: any;
    }
    this.topicMap.forEach((value: string, key: number) => {
        // console.log(key, value);
        this.getData(key).then((resp) => {
            let t = new Topic();
            t.no = key;
            t.title = resp.quiz.name;
            t.note = resp.questions.length + ' questions';
            t.icon = resp.quiz.logo;


            if (this.topics.length != this.topicMap.size) {
               // some kinda bug, adding twice hence frocing to break after the size is reached.
              this.topics.push(t);
            }
            
        });
    });
  console.log('Formed Topics Array:', this.topics);
  return this.topics;
    

  }
}

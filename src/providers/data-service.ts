import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  topicMap: Map<number, Array<string>>;

  dataMap: Map<number, string>;

  data: any = null;
  fileName: string;

  constructor(public http: Http) {
    console.log('Hello DataService Provider');

    this.dataMap = new Map<number, string>();
    this.dataMap.set(1, '../assets/data/iam.js');


    this.topicMap = new Map<number, Array<string>>();
    this.topicMap.set(1, ["Practice Questions 1.1","Practice Questions 1.2","Practice Questions 1.3","Practice Questions 1.4",]);
    this.topicMap.set(2, ["Practice Questions 2.1","Practice Questions 2.2","Practice Questions 2.3","Practice Questions 2.4",]);
    this.topicMap.set(3, ["Practice Questions 3.1","Practice Questions 3.2","Practice Questions 3.3","Practice Questions 3.4",]);
    this.topicMap.set(4, ["Practice Questions 4.1","Practice Questions 4.2","Practice Questions 4.3","Practice Questions 4.4",]);
    this.topicMap.set(5, ["Practice Questions 5.1","Practice Questions 5.2","Practice Questions 5.3","Practice Questions 5.4",]);
    this.topicMap.set(6, ["Practice Questions 6.1","Practice Questions 6.2","Practice Questions 6.3","Practice Questions 6.4",]);
    this.topicMap.set(7, ["Practice Questions 7.1","Practice Questions 7.2","Practice Questions 7.3","Practice Questions 7.4",]);
  }


  getQuestions(topic: number) : Array<string> {
    return this.topicMap.get(topic);
  }

  load(topic: number) {

    this.fileName = this.dataMap.get(topic);
    console.log("FILENAME =>", this.fileName);
    
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.fileName)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }


  getData(topic: number) {
  return this.load(topic).then(data => {
    return data;
  });
}
}

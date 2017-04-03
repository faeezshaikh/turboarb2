import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  topicMap: Map<number, Array<string>>;

  constructor(public http: Http) {
    console.log('Hello DataService Provider');

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

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-whitepapers',
  templateUrl: 'whitepapers.html'
})
export class WhitepapersPage {

  whitepapers: Array<{ no: number, title: string, note: string,link:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.whitepapers = [{no:1,title:"Overview of Security Processes",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/Security/AWS_Security_Best_Practices.pdf"},
    {no:2,title:"Storage Options in the Cloud",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/Storage/AWS%20Storage%20Services%20Whitepaper-v9.pdf"},
    {no:3,title:"Fault Tolerant Apps in the cloud",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/aws-building-fault-tolerant-applications.pdf"},
    {no:4,title:"Overview of AWS",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/aws-overview.pdf"},
    {no:5,title:"Compliance Whitepaper",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/compliance/AWS_Risk_and_Compliance_Whitepaper.pdf"},
    {no:6,title:"Architecting for the AWS Cloud",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhitepapersPage');
  }

openLink(e,link) {
    	window.open(link, '_system', 'location=yes');
			return false;
  }

}

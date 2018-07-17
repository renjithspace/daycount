import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import  moment from 'moment'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	start = ""
	days:number
  result = ""

  constructor(public navCtrl: NavController) {}

  count() {
    if (!this.start || !this.days) return
  	var result = moment(this.start).add(this.days, 'days')
    this.result = moment(result).format('Do MMM YYYY')
  }
}

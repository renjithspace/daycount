import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import  moment from 'moment'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	start = ""
	end = ""
  result = ""

  constructor(public navCtrl: NavController) {}

  count() {
  	this.result = moment(this.end).diff(this.start, 'days')
  }
}

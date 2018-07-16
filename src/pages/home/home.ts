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

  constructor(public navCtrl: NavController) {}

  count() {
  	if (!this.result && !this.end) return
  	this.result = moment(this.end).diff(this.start, 'days')
  }
}

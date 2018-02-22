import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CardsProvider } from '../../providers/cards/cards';
import { Cards } from '../../models/cards';
import { SetViewPage } from '../set-view/set-view';

@IonicPage()
@Component({
  selector: 'page-card-sets',
  templateUrl: 'card-sets.html',
})
export class CardSetsPage {

  sets: Cards[];
  pushpage: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cardsProvider: CardsProvider
  ){
    this.pushpage = SetViewPage;
  }

  ionViewDidLoad() {
    this.getSets();
  }

  getSets(){
    this.cardsProvider.getSets().subscribe(
      (response:any) => {
        console.log(response)
        this.sets = response.data;
      }
    )
  }

  getSet(set){
    this.navCtrl.push(SetViewPage, set.code);
  }
}

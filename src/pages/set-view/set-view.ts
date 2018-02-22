import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardsProvider } from '../../providers/cards/cards';
import { Cards } from '../../models/cards';

@IonicPage()
@Component({
  selector: 'page-set-view',
  templateUrl: 'set-view.html',
})
export class SetViewPage {

  set: Cards;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cardsProvider: CardsProvider
  ) {}

  ionViewDidLoad() {
    const clickedSet = this.navParams.data;
    console.log(clickedSet);
    this.getSet(clickedSet);
  }

  getSet(clickedSet){
    this.cardsProvider.getSet(clickedSet).subscribe(
      (response) => {
        console.log(response)
        this.set = response
      }
    )
  }

}
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardsProvider } from '../../providers/cards/cards';
import { Cards } from '../../models/cards';
import { CardViewPage } from '../card-view/card-view';

@IonicPage()
@Component({
  selector: 'page-set-view',
  templateUrl: 'set-view.html',
})
export class SetViewPage {

  set: Cards;
  cards: Cards[];
  pushpage: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cardsProvider: CardsProvider
  ) {
    this.pushpage = CardViewPage;
  }

  ionViewDidLoad() {
    const clickedSet = this.navParams.data;
    console.log(clickedSet);
    this.getSet(clickedSet);
    this.setCards(clickedSet);
  }

  getSet(clickedSet){
    this.cardsProvider.getSet(clickedSet).subscribe(
      (response) => {
        console.log(response)
        this.set = response
      }
    )
  }

  setCards(setCode){
    this.cardsProvider.getCards(setCode).subscribe(
      (response:any) => {
        console.log(response)
        this.cards = response.data
      }
    )
  }

  tapEvent(card){
    this.navCtrl.push(CardViewPage, card.name);
  }

}
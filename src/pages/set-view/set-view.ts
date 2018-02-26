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
  next: Cards[];

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
    this.setCards2(clickedSet);
    this.clickMore(clickedSet);
  }

  // Takes clicked set code to display information about selected Set (date released, etc)
  getSet(clickedSet){
    this.cardsProvider.getSet(clickedSet).subscribe(
      (response) => {
        console.log(response)
        this.set = response
      }
    )
  }

  // Used to access card data to be able to display all cards within the Set
  setCards(setCode){
    this.cardsProvider.getCards(setCode).subscribe(
      (response:any) => {
        console.log(response)
        this.cards = response.data
      }
    )
  }

  //Used to access set json data about the set 
  setCards2(setCode){
    this.cardsProvider.getCards(setCode).subscribe(
      (response:any) => {
        this.next = response
      }
    )
  }

  // No clue
  clickMore(setCode){
    this.cardsProvider.nextPage(setCode).subscribe(
      (response:any) => {
        console.log(response)
        this.next = response
      }
    )
  }

  // Tap event on card that pushes to the Card View Page, displaying info on selected card
  tapEvent(card){
    this.navCtrl.push(CardViewPage, card.name);
  }

  /*clickEvent(cardss){
    console.log(cardss.next_page);
  }*/
}
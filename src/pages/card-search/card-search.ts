import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardsProvider } from '../../providers/cards/cards';
import { Cards } from '../../models/cards';
import { CardViewPage } from '../card-view/card-view';

@IonicPage()
@Component({
  selector: 'page-card-search',
  templateUrl: 'card-search.html',
})
export class CardSearchPage {

  public cards: Cards[];
  public searchedCard: string = '';
  pushpage: any;
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cardsProvider: CardsProvider
  ){
    this.pushpage = CardViewPage;
  }

  ionViewDidLoad() {
    
  }

  // passes searchedCard string that user enters through the Provider method.
  // Scryfall API displays results 
  searchCard(){
    this.cardsProvider.searchCard(this.searchedCard).subscribe(
      (response:any) => {
        console.log(response);
        this.cards = response.data;
      }
    )
  }

  // Tap event on card that pushes to the Card View Page, displaying info on selected card
  tapEvent(card){
    this.navCtrl.push(CardViewPage, card.name);
  }
}

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

  //cards: Cards;
  public cards: Cards[];
  public searchedCard: string = '';
  //public selectedCard: any[];
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

  public searchCard(){
    this.cardsProvider.searchCard(this.searchedCard).subscribe(
      (response:any) => {
        console.log(response);
        this.cards = response.data;
      }
    )
  }

  tapEvent(card){
    this.navCtrl.push(CardViewPage, card.name);
  }
}

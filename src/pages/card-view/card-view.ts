import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CardsProvider } from '../../providers/cards/cards';
import { Cards } from '../../models/cards';

@IonicPage()
@Component({
  selector: 'page-card-view',
  templateUrl: 'card-view.html',
})
export class CardViewPage {

  card: Cards;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cardsProvider: CardsProvider
  ){}

  ionViewDidLoad() {
    const clickedCard = this.navParams.data;
    this.getCard(clickedCard);
  }

   getCard(clickedCard){
     this.cardsProvider.getCard(clickedCard).subscribe(
       (response) => {
        console.log(response)
         this.card = response
       }
     );
   }

}

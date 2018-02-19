import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardsProvider } from '../../providers/cards/cards';
import { Cards } from '../../models/cards';

@IonicPage()
@Component({
  selector: 'page-card-search',
  templateUrl: 'card-search.html',
})
export class CardSearchPage {

  //cards: Cards;
  public cards: Cards[];
  public searchedCard: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cardsProvider: CardsProvider
  ){}

  ionViewDidLoad() {
    
  }

  searchCard(){
    this.cardsProvider.searchCard(this.searchedCard).subscribe(
      (response:any) => {
        console.log(response);
        this.cards = response.data;
        // parse the response into array  
      }
    )
  }

/* response(response): void{
    console.log(response)
    if(response.success===true){

    }
  }

  onSubmit(): void{
    this.cardsProvider.searchCard(name).subscribe(
      (response) => {
        this.response(response)
      }
    )
  } */

}

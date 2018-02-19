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

  card: Cards;
  public searchedCard: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cardsProvider: CardsProvider
  ){}

  ionViewDidLoad() {
    
  }
// Find out how to have string of card name be submitted and searched.
  searchCard(name){
    this.cardsProvider.searchCard(name).subscribe(
      (response) => {
        console.log(response);
        this.card = response;
      }
    )
  }

  response(response): void{
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
  }

}

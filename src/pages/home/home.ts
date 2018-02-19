import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardsProvider } from '../../providers/cards/cards';
import { Cards } from '../../models/cards';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public card: Cards;

  constructor(
    public navCtrl: NavController,
    private cardsProvider: CardsProvider,
    private screenOrientation: ScreenOrientation,
    public plt: Platform
    
  ){
    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      console.log(this.screenOrientation.type);
        if (this.plt.is('android')){
          console.log("This is Android");
          //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
    });
  }

  public ionViewDidLoad() {
    //this.screenOrientation.lock('portrait');
    
    this.getCard();
    //this.screenLock();
  }

  /*public screenLock(){
    if(this.plt.is('cordova')){
      console.log(this.screenOrientation.type);
    }
  }*/
  
  public getCard(){
    this.cardsProvider.getCard().subscribe(
      (response) => {
        console.log(response);
        this.card = response;
 
      }
    )
  }
}

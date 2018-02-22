import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardSetsPage } from './card-sets';

@NgModule({
  declarations: [
    CardSetsPage,
  ],
  imports: [
    IonicPageModule.forChild(CardSetsPage),
  ],
})
export class CardSetsPageModule {}

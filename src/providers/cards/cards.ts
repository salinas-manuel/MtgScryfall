import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cards } from '../../models/cards';


@Injectable()
export class CardsProvider {

  private url: string = 'https://api.scryfall.com';

  constructor(public http: HttpClient) {}

  // GET /cards/name
  public getCard(clickedCard: string): Observable<Cards> { 
    return this.http.get<Cards>(this.url + `/cards/named?fuzzy=${clickedCard}`);
  }

  public searchCard(searchedCard: string): Observable<Cards> {
    return this.http.get<Cards>(this.url + `/cards/search?q=${searchedCard}`);
  }

  public getSets(): Observable<Cards> {
    return this.http.get<Cards>(this.url + `/sets`);
  }

  public getSet(setCode: string): Observable<Cards> {
    return this.http.get<Cards>(this.url + `/sets/${setCode}`);
  }

  public getCards(setCode: string): Observable<Cards> {
    return this.http.get<Cards>(this.url + `/cards/search?order=set&q=%2B%2Be%3A${setCode}`);
  }

}

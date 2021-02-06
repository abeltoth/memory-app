import { CardData } from './../shared/model/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  cardList: CardData[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setCardList();
  }

  private setCardList(): void {
    this.cardList.push({imageUrl: '../../assets/images/cards/angular.png', flipped: false});
    this.cardList.push({imageUrl: '../../assets/images/cards/angular.png', flipped: false});
    this.cardList.push({imageUrl: '../../assets/images/cards/d3.png', flipped: false});
    this.cardList.push({imageUrl: '../../assets/images/cards/d3.png', flipped: false});
    this.cardList.push({imageUrl: '../../assets/images/cards/html5.png', flipped: false});
    this.cardList.push({imageUrl: '../../assets/images/cards/html5.png', flipped: false});
    this.cardList.push({imageUrl: '../../assets/images/cards/jenkins.png', flipped: false});
    this.cardList.push({imageUrl: '../../assets/images/cards/jenkins.png', flipped: false});
    this.cardList.push({imageUrl: '../../assets/images/cards/postcss.png', flipped: false});
    this.cardList.push({imageUrl: '../../assets/images/cards/postcss.png', flipped: false});
  }

}

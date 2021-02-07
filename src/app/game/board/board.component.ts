import { CardData } from './../../shared/model/models';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() cardList: CardData[];

  @Output() cardFlipped = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  cardFlip(card: CardData): void {
    if (!card.matched) {
      this.cardFlipped.emit(card);
    }
  }

}

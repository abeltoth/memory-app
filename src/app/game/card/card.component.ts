import { CardData } from './../../shared/model/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() flipped = false;
  @Input() cardData: CardData;

  constructor() { }

  ngOnInit(): void {
  }

}
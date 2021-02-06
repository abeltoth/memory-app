import { CardData } from './../../shared/model/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() cardList: CardData[];

  constructor() { }

  ngOnInit(): void {
  }

}

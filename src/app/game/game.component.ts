import { GameSettingsService } from './../shared/services/game-settings.service';
import { CardData } from './../shared/model/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  cardList: CardData[] = [];
  flippedCardList: CardData[] = [];
  currentTries = 0;
  bestScore = localStorage.getItem('memory-app-best-score') || '-';
  gameEnded = false;

  constructor(
    private gameSettingsService: GameSettingsService
  ) { }

  ngOnInit(): void {
    this.startGame();
    this.gameSettingsService.startGame$.subscribe(() => {
      this.startGame();
    });
  }

  startGame(): void {
    this.setCardList();
    this.currentTries = 0;
    this.gameEnded = false;
  }

  endGame(): void {
    if (this.currentTries < (Number(this.bestScore) || Infinity)) {
      this.bestScore = this.currentTries.toString();
      localStorage.setItem('memory-app-best-score', this.bestScore);
    }
    this.gameEnded = true;
  }

  cardFlipped(card: CardData): void {
    if (this.flippedCardList.length < 2 && !this.flippedCardList.includes(card) && !this.gameEnded) {
      card.flipped = true;
      this.flippedCardList.push(card);
      if (this.flippedCardList.length === 2) {
        const match = this.flippedCardList[0].imageUrl === this.flippedCardList[1].imageUrl;
        this.evaluateFlippedCards(match);
        this.flipBackCards(match);
        this.currentTries++;
      }
    }
  }

  private evaluateFlippedCards(match: boolean): void {
    if (match) {
      const matchedImageUrl = this.flippedCardList[0].imageUrl;
      this.cardList.forEach(c => {
        if (c.imageUrl === matchedImageUrl) {
          c.matched = true;
        }
      });
      if (this.cardList.every(c => c.matched)) {
        this.endGame();
      }
    }
  }

  private flipBackCards(match: boolean): void {
    if (!match) {
      setTimeout(() => {
        this.cardList.filter(c => !c.matched).forEach(c => c.flipped = false);
        this.flippedCardList = [];
      }, 1500);
    } else {
      this.flippedCardList = [];
    }
  }

  private setCardList(): void {
    const cardCount = this.gameSettingsService.loadSelectedDeckSizeOptionValue();
    const cardNumbers = [...Array(cardCount).keys()];
    const imagePath = '../../assets/images/cards';
    const imageNames = ['angular', 'd3', 'html5', 'jenkins', 'postcss', 'react', 'redux', 'sass', 'ts', 'webpack'];

    this.cardList = [];
    cardNumbers.forEach((cardNumber, index) => {
      this.cardList.push({imageUrl: `${imagePath}/${imageNames[Math.floor(index / 2)]}.png`, flipped: false, matched: false});
    });

    this.shuffleArray(this.cardList);
  }

  private shuffleArray(array: Array<any>): void {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

}

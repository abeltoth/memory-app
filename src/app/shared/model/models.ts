export interface DropdownOption {
  key: string;
  selected: boolean;
  value: string;
}

export interface CardData {
  imageUrl: string;
  flipped: boolean;
  matched: boolean;
}

export interface GameState {
  currentTries: number;
  cardList: CardData[];
}

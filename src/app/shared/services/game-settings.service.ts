import { DropdownOption } from './../model/models';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {
  deckSize: number;
  deckSizeSelected = new ReplaySubject(1);

  constructor() {
    this.saveDeckSize();
  }

  private saveDeckSize(): void {
    this.deckSizeSelected.subscribe(selectedOption => {
      this.deckSize = Number((selectedOption as DropdownOption).value);
      localStorage.setItem('memory-app-deck-size', this.deckSize.toString());
    });
  }
}

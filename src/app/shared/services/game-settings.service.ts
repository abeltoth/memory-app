import { DropdownOption } from './../model/models';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {
  onDeckSizeSelected$ = new ReplaySubject(1);
  startGame$ = new Subject();

  constructor() {}

  loadDeckSizeOptions(): DropdownOption[] {
    const sizeOptions = this.getDeckSizeOptions();
    const savedOptionValue = this.loadSelectedDeckSizeOptionValue();
    const selectedOptionIndex = sizeOptions.findIndex(option => option.value === savedOptionValue.toString());
    sizeOptions[selectedOptionIndex].selected = true;
    return sizeOptions;
  }

  saveDeckSizeOptions(deckSize: number): void {
    localStorage.setItem('memory-app-deck-size', deckSize.toString());
  }

  loadSelectedDeckSizeOptionValue(): number {
    return Number(localStorage.getItem('memory-app-deck-size')) || 6;
  }

  private getDeckSizeOptions(): DropdownOption[] {
    const sizeOptions: DropdownOption[] = [];
    const optionValues = [...Array(21).keys()].filter(v => v > 5 && v % 2 === 0);

    optionValues.forEach(value => {
      sizeOptions.push({key: value.toString(), selected: false, value: value.toString()});
    });

    return sizeOptions;
  }
}

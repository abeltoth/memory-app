import { DropdownOption } from './../shared/model/models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameSettingsService } from '../shared/services/game-settings.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  sizeOptions: DropdownOption[] = [];

  constructor(
    private router: Router,
    private gameSettingsService: GameSettingsService
  ) { }

  ngOnInit(): void {
    this.sizeOptions = this.gameSettingsService.loadDeckSizeOptions();
  }


  deckSizeOptionSelected(option: DropdownOption): void {
    if (this.gameSettingsService.loadSelectedDeckSizeOptionValue().toString() !== option.value) {
      this.gameSettingsService.saveDeckSizeOptions(Number(option.value));
      this.gameSettingsService.onDeckSizeSelected$.next(option.value);
    }
  }

  startGame(): void {
    this.router.navigateByUrl('/game');
  }

}

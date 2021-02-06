import { EventsService } from './../../services/events.service';
import { DropdownOption } from './../../model/models';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { SubSink } from 'subsink';
import { GameSettingsService } from '../../services/game-settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'mobilemenuAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)'}),
          animate('500ms', style({transform: 'translateY(0)'}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)'}),
          animate('500ms', style({transform: 'translateY(-100%)'}))
        ])
      ]
    )
  ],
})
export class HeaderComponent implements OnInit, AfterContentInit {

  mobileMenuVisible = false;
  gameSettingsVisible = false;
  sizeOptions: DropdownOption[] = [];

  subs = new SubSink();

  constructor(
    private eventsService: EventsService,
    private gameSettingsService: GameSettingsService
  ) { }

  ngOnInit(): void {
    this.setSizeOptions();
    this.subs.add(
      this.eventsService.routeChanged.subscribe((routerEvent) => {
        if (routerEvent instanceof NavigationEnd) {
          this.gameSettingsVisible = routerEvent.url === '/game';
        }
      })
    );
  }

  ngAfterContentInit(): void {
    this.getSelectedDeckSizeOption();
  }

  deckSizeOptionSelected(option: DropdownOption): void {
    if (this.gameSettingsService.deckSize?.toString() !== option.value) {
      this.gameSettingsService.deckSizeSelected.next(option);
    }
  }

  getSelectedDeckSizeOption(): void {
    const savedOption = Number(localStorage.getItem('memory-app-deck-size'));
    if (savedOption) {
      const selectedOptionIndex = this.sizeOptions.findIndex(option => option.value === savedOption.toString());
      this.sizeOptions[selectedOptionIndex].selected = true;
    } else {
      this.sizeOptions[0].selected = true;
    }
  }

  private setSizeOptions(): void {
    const optionValues = [...Array(21).keys()].filter(v => v > 5 && v % 2 === 0);

    optionValues.forEach(value => {
      this.sizeOptions.push({key: value.toString(), selected: false, value: value.toString()});
    });
  }

}

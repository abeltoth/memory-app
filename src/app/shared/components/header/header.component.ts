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
export class HeaderComponent implements OnInit {

  mobileMenuVisible = false;
  gameSettingsVisible = false;
  sizeOptions: DropdownOption[] = [];

  subs = new SubSink();

  constructor(
    private eventsService: EventsService,
    private gameSettingsService: GameSettingsService
  ) { }

  ngOnInit(): void {
    this.sizeOptions = this.gameSettingsService.loadDeckSizeOptions();
    this.subs.add(
      this.eventsService.routeChanged$.subscribe((routerEvent) => {
        if (routerEvent instanceof NavigationEnd) {
          this.gameSettingsVisible = routerEvent.url === '/game';
        }
      }),
      this.gameSettingsService.onDeckSizeSelected$.subscribe(() => {
        this.sizeOptions = this.gameSettingsService.loadDeckSizeOptions();
      })
    );
  }

  deckSizeOptionSelected(option: DropdownOption): void {
    if (this.gameSettingsService.loadSelectedDeckSizeOptionValue().toString() !== option.value) {
      this.gameSettingsService.saveDeckSizeOptions(Number(option.value));
    }
  }

  startGame(): void {
    this.gameSettingsService.startGame$.next();
  }

}

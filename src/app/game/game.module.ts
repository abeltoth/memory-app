import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [GameComponent, CardComponent, BoardComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule
  ]
})
export class GameModule { }

import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  routeChanged$ = new ReplaySubject(1);

  constructor() { }
}

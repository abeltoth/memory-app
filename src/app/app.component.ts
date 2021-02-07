import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { EventsService } from './shared/services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'memory-app';

  subs = new SubSink();

  constructor(
    private router: Router,
    private eventsService: EventsService
    ) { }

  ngOnInit(): void {
    this.subs.add(
      this.router.events.subscribe((routerEvent) => {
        if (routerEvent instanceof NavigationEnd) {
          this.eventsService.routeChanged$.next(routerEvent);
        }
      })
    );
  }
}

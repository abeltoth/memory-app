import { DropdownOption } from './../shared/model/models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  sizeOptions: DropdownOption[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setSizeOptions();
  }

  navigateToGame(): void {
    this.router.navigateByUrl('/game');
  }

  private setSizeOptions(): void {
    const optionValues = [...Array(21).keys()].filter(v => v > 5 && v % 2 === 0);

    optionValues.forEach(value => {
      this.sizeOptions.push({key: value.toString(), selected: false, value: value.toString()});
    });
  }

}

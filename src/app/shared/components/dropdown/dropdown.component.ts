import { DropdownOption } from './../../model/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() label = '';
  @Input() labelDirection: 'vertical' | 'horizontal' = 'horizontal';
  @Input() options: DropdownOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

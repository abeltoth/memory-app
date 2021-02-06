import { DropdownOption } from './../../model/models';
import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() label = '';
  @Input() labelDirection: 'vertical' | 'horizontal' = 'horizontal';
  @Input() options: DropdownOption[] = [];

  @Output() optionSelected = new EventEmitter<any>();

  selectedOption: DropdownOption;

  constructor() { }

  ngOnInit(): void {
    this.selectedOption = this.options.find(option => option.selected === true) || this.options[0];
  }

  optionSelect(): void {
    this.optionSelected.emit(this.selectedOption);
  }

}

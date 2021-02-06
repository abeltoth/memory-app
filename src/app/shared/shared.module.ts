import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';



@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    ButtonComponent,
    DropdownComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ShellComponent,
    HeaderComponent,
    ButtonComponent,
    DropdownComponent
  ]
})
export class SharedModule { }

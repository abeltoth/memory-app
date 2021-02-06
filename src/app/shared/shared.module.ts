import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    ButtonComponent,
    DropdownComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ShellComponent,
    HeaderComponent,
    ButtonComponent,
    DropdownComponent
  ]
})
export class SharedModule { }

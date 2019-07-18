import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    LinkComponent
  ],
  exports: [
    NavbarComponent,
    LinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavigationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';

const exportations = [SidenavComponent, NavbarComponent];

@NgModule({
  declarations: [...exportations],
  exports: [...exportations],
  imports: [CommonModule],
})
export class NavigationModule {}

import { Component } from '@angular/core';

export interface NavItem {
  title: string;
  icon?: string;
  link?: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  navItems: NavItem[] = [
    // Array<NavItem>
    {
      title: 'customers',
      icon: 'fas fa-users',
    },
    {
      title: 'contacts',
      icon: 'fas fa-address-book',
    },
    {
      title: 'leads',
      icon: 'fas fa-hand-point-up',
    },
    {
      title: 'reports',
      icon: 'fas fa-flag',
    },
    {
      title: 'integrations',
      icon: 'fab fa-stack-exchange',
    },
    {
      title: 'year-end sale',
      icon: 'fas fa-glass-cheers',
    },
  ];
}

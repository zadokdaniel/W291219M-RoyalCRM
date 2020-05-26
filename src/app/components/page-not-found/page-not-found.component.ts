import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <app-page-header
      title="Page Not Found"
      icon="fas fa-exclamation-circle"
      description="The page you are looking for is not found - Error 404."
    ></app-page-header>
  `,
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {}

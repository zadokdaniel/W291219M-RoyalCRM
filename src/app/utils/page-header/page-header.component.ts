import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="row mt-5">
      <div class="col-12">
        <div class="jumbotron pt-3 pb-3">
          <h3><i [ngClass]="icon"></i> {{ title | titlecase }}</h3>
          <p class="lead">{{ description }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}

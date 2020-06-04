import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  idParam = '';

  constructor(private activatedRouteService: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRouteService.params
      .pipe(tap(console.log))
      .subscribe((params) => (this.idParam = params?.id));

    // const id = this.activatedRouteService.snapshot.params.id;
    // console.log(id);
  }
}

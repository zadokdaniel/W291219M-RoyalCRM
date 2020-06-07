import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CustomersService } from 'src/app/services/customers.service';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  customer$: Observable<Customer> = null;

  constructor(
    private activatedRouteService: ActivatedRoute,
    private customerService: CustomersService
  ) {}

  ngOnInit(): void {
    // Get params observable - async
    this.customer$ = this.activatedRouteService.params.pipe(
      switchMap((params) => this.customerService.getById(params.id))
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [],
})
export class CustomersComponent implements OnInit {
  customersObservable: Observable<Customer[]>;

  term = '';

  constructor(private customersService: CustomersService) {
    this.customersObservable = this.customersService.getAll();
  }

  remove(id: string, e: MouseEvent) {
    e.preventDefault();

    if (confirm('Are you sure you want to delete?')) {
      this.customersService.remove(id);
    }
  }

  ngOnInit(): void {}
}

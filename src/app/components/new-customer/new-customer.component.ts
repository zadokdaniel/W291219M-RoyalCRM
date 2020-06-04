import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
})
export class NewCustomerComponent implements OnInit {
  constructor(
    private routerService: Router,
    private CustomersService: CustomersService
  ) {}

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  resetForm(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  async onSubmit({ value, valid }: { value: Customer; valid: boolean }) {
    if (valid) {
      await this.CustomersService.add(value);
      this.routerService.navigate(['/customers']);
    }
  }

  ngOnInit(): void {}
}

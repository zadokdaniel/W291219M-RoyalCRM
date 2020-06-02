import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../../interfaces/customer';
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
})
export class NewCustomerComponent implements OnInit {
  constructor() {}
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

  onSubmit({ value, valid }: { value: Customer; valid: boolean }): void {
    console.log(value, valid);
    // TODO: insert document to db
  }

  ngOnInit(): void {}
}

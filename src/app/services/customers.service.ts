import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef: AngularFirestoreCollection<Customer>;

  constructor(private afs: AngularFirestore) {
    this.customersRef = this.afs.collection('customer');
  }

  add(customer: Customer) {
    return this.customersRef.add(customer);
  }

  getAll() {
    return this.customersRef.valueChanges({ idField: 'id' });
  }

  remove(id: string) {
    return this.customersRef.doc(id).delete();
  }
}

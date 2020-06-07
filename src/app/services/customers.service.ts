import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Customer } from '../interfaces/customer';
import { Observable } from 'rxjs';
import { map, share, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef: AngularFirestoreCollection<Customer>;
  customers$: Observable<Customer[]>;

  constructor(private afs: AngularFirestore) {
    this.customersRef = this.afs.collection('customer');

    this.customers$ = this.customersRef
      .valueChanges({ idField: 'id' })
      .pipe(shareReplay(1));
  }

  add(customer: Customer) {
    return this.customersRef.add(customer);
  }

  getAll() {
    return this.customers$;
  }

  remove(id: string) {
    return this.customersRef.doc(id).delete();
  }

  getById(id: string): Observable<Customer> {
    return this.customersRef
      .doc<Customer>(id)
      .valueChanges()
      .pipe(
        map((doc) => {
          if (doc) {
            return { id, ...doc };
          }
          return null;
        })
      );
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/new', component: NewCustomerComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'customers/:id/edit', component: NewCustomerComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

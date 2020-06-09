import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { canActivate: [AuthGuard], path: '', component: LoginComponent },
  {
    canActivate: [AuthGuard],
    path: 'customers',
    component: CustomersComponent,
  },
  {
    canActivate: [AuthGuard],
    path: 'customers/new',
    component: NewCustomerComponent,
  },
  {
    canActivate: [AuthGuard],
    path: 'customers/:id',
    component: CustomerDetailsComponent,
  },
  {
    canActivate: [AuthGuard],
    path: 'customers/:id/edit',
    component: CustomerEditComponent,
  },
  { canActivate: [AuthGuard], path: 'contacts', component: ContactsComponent },
  {
    canActivate: [AuthGuard],
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    canActivate: [AuthGuard],
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

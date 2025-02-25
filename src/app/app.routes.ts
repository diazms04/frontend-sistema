import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'transactions/:user_id', component: TransactionsComponent } // Ruta con user_id
];

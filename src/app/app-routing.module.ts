import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/domain/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'new-recipient',
    loadChildren: () =>
      import('src/app/domain/recipient-new/recipient-new.module').then((m) => m.RecipientNewModule),
  },
  {
    path: 'deposit',
    loadChildren: () => import('src/app/domain/deposit-new/deposit-new.module').then((m) => m.DepositNewModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('src/app/domain/transaction-history/transaction-history.module').then((m) => m.TransactionHistoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

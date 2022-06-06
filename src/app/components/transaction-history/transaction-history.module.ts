import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionHistoryRoutingModule } from './transaction-history-routing.module';
import { TransactionHistoryComponent } from './pages/transaction-history.component';
import { TransactionListComponent } from './components/transaction-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TransactionHistoryComponent,
    TransactionListComponent
  ],
  imports: [
    CommonModule,
    TransactionHistoryRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TransactionHistoryModule { }

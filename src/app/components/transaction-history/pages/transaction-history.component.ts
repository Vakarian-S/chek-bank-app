import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../domain/user/services/user.service';
import { User } from '../../../domain/user/interfaces/user.interface';
import { TransactionService } from '../../../domain/transaction/services/transaction.service';
import { Transaction } from '../../../domain/transaction/interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
})
export class TransactionHistoryComponent implements OnInit {
  user: User | undefined = undefined;
  transactions: Transaction[] = [];
  constructor(private readonly userService: UserService, private readonly transactionService: TransactionService) {}

  async ngOnInit() {
    await this.getUser();
    this.getTransactions();
  }

  async getTransactions() {
    if (this.user && this.user.id) {
      const response = await this.transactionService.getByAccountId(this.user?.id);
      if (response) {
        this.transactions = response.map((transaction) => ({
          ...transaction,
          ...(transaction.sender.accountNumber === this.user?.accountNumber && { credit: transaction.amount }),
          ...(transaction.sender.accountNumber !== this.user?.accountNumber && { debit: transaction.amount }),
          balance: transaction.sender.accountNumber === this.user?.accountNumber ? transaction.senderBalance : transaction.recipientBalance
        }));
      }
    }
  }

  getUser() {
    this.user = this.userService.get();
  }
}

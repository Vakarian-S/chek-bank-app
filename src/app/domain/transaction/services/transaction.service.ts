import { Injectable } from '@angular/core';
import { TransactionDto } from '../interfaces/transaction.interface';
import { TransactionProxyService } from './transaction-proxy.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private readonly transactionProxyService: TransactionProxyService) {}

  async getAll() {
    return this.transactionProxyService.getAll();
  }

  async create(transactionDto: TransactionDto) {
    return this.transactionProxyService.create(transactionDto);
  }

  getByAccountId(transactionId: string) {
    return this.transactionProxyService.getByAccountId(transactionId);
  }
}

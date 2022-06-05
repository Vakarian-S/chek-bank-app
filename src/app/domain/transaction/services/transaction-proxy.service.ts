import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Transaction, TransactionDto } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionProxyService {
  private baseUrl = `${environment.bankServiceUrl}/transaction`;

  constructor(private readonly http: HttpClient) {}

  async getAll() {
    return this.http.get<Transaction[]>(this.baseUrl).toPromise();
  }

  async create(transactionDto: TransactionDto) {
    return this.http.post<Transaction>(this.baseUrl, transactionDto).toPromise();
  }

  getByAccountId(transactionId: string) {
    const url = new URL(`${this.baseUrl}/${transactionId}`);
    return this.http.get<Transaction[]>(url.toString()).toPromise();
  }

}

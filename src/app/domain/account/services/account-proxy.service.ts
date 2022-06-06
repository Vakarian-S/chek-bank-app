import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Account, AccountDto } from '../interfaces/account.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountProxyService {
  private baseUrl = `${environment.bankServiceUrl}/account`;

  constructor(private readonly http: HttpClient) {}

  async getAll() {
    return this.http.get<Account[]>(this.baseUrl).toPromise();
  }

  async create(accountDto: AccountDto) {
    return this.http.post<Account>(this.baseUrl, accountDto).toPromise();
  }

  getById(accountId: string) {
    const url = new URL(`${this.baseUrl}/${accountId}`);
    return this.http.get<Account>(url.toString()).toPromise();
  }

  getRecipients(accountId: string) {
    const url = new URL(`${this.baseUrl}/${accountId}/saved-recipients`);
    return this.http.get<Account>(url.toString()).toPromise();
  }

  addRecipient(accountId: string, accountDto: AccountDto) {
    const url = new URL(`${this.baseUrl}/${accountId}/saved-recipients`);
    return this.http.post<Account>(url.toString(), accountDto).toPromise();
  }
}

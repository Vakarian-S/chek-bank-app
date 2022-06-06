import { Injectable } from '@angular/core';
import { AccountDto } from '../interfaces/account.interface';
import { AccountProxyService } from './account-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private readonly accountProxyService: AccountProxyService) { }

  async getAll() {
    return this.accountProxyService.getAll();
  }

  async create(accountDto: AccountDto) {
    return this.accountProxyService.create(accountDto)
  }

  getById(accountId: string) {
    return this.accountProxyService.getById(accountId)
  }

  getRecipients(accountId: string) {
    return this.accountProxyService.getRecipients(accountId)
  }

  addRecipient(accountId: string, accountDto: AccountDto) {
    return this.accountProxyService.addRecipient(accountId, accountDto)
  }
}

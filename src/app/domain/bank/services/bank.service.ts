import { Injectable } from '@angular/core';
import { BankProxyService } from './bank-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private readonly bankProxyService:BankProxyService) { }


  async getAll() {
    return this.bankProxyService.getAll();
  }
}

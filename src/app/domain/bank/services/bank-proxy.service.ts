import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Bank } from '../interfaces/bank.interface';

@Injectable({
  providedIn: 'root'
})
export class BankProxyService {
  private baseUrl = `${environment.bankListServiceUrl}/banks.php`;

  constructor(private readonly http: HttpClient) {}

  async getAll() {
    return this.http.get<{ banks: Bank[]}>(this.baseUrl).toPromise();
  }
}

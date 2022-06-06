import { AccountTypeEnum } from '../enums/account-type.enum';
import { Transaction } from '../../transaction/interfaces/transaction.interface';

export interface Account {
  id: string;
  name: string;
  dni: string;
  email: string;
  phone: string;
  bank: string;
  accountType: AccountTypeEnum;
  accountNumber: number;
  balance: number;
  transactionsSent: Transaction[];
  transactionsReceived: Transaction[];
  savedRecipients: Account[];
}

export interface AccountDto {
  name: string;
  dni: string;
  email: string;
  phone: string;
  bank: string;
  accountType: AccountTypeEnum;
  accountNumber: number;
}

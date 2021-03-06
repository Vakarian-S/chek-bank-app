import { Account } from '../../account/interfaces/account.interface';

export interface Transaction {
  id: string;
  amount: number;
  createdAt?: Date;
  sender: Account;
  recipient: Account;
  credit?: number;
  debit?: number;
  senderBalance: number;
  recipientBalance: number;
  balance?: number
}

export interface TransactionDto {
  amount: number;
  senderId: string;
  recipientId: string;
}

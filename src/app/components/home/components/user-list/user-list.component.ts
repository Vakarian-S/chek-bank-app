import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../domain/account/services/account.service';
import { Account } from '../../../../domain/account/interfaces/account.interface';
import { User } from '../../../../domain/user/interfaces/user.interface';
import { UserService } from '../../../../domain/user/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  accounts: Account[] = [];
  displayedColumns: string[] = ['accountNumber', 'name', 'dni', 'bank', 'accountType'];

  constructor(private readonly accountService: AccountService, private readonly userService: UserService) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  async getAccounts() {
    const response = await this.accountService.getAll();
    if (response) {
      this.accounts = response;
    }
  }

  setUser(value: Account) {
    const user: User = {
      name: value.name,
      id: value.id,
      accountNumber: value.accountNumber,
    };
    this.userService.save(user);
    this.userService.get();
  }
}

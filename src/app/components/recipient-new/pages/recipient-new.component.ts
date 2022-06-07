import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountTypeEnum } from '../../../domain/account/enums/account-type.enum';
import { BankService } from '../../../domain/bank/services/bank.service';
import { AccountService } from '../../../domain/account/services/account.service';
import { User } from '../../../domain/user/interfaces/user.interface';
import { UserService } from '../../../domain/user/services/user.service';
import { AccountDto } from '../../../domain/account/interfaces/account.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipient-new',
  templateUrl: './recipient-new.component.html',
  styleUrls: ['./recipient-new.component.scss'],
})
export class RecipientNewComponent implements OnInit {
  bankList: any[] = [];
  recipientForm: FormGroup | undefined;
  accountTypes = Object.values(AccountTypeEnum);
  user: User | undefined = undefined;
  isSubmitting = false;

  constructor(
    private readonly accountService: AccountService,
    private readonly bankService: BankService,
    private readonly formBuilder: FormBuilder,
    private readonly userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getBanks();
    this.getUser();
  }

  async getBanks() {
    const bankResponse = await this.bankService.getAll();
    if (bankResponse) {
      this.bankList = bankResponse.banks;
    }
  }

  getUser() {
    this.user = this.userService.get();
  }

  buildForm() {
    this.recipientForm = this.formBuilder.group({
      dni: [null, [Validators.required, Validators.maxLength(100)]],
      name: [null, [Validators.required, Validators.maxLength(100)]],
      email: [null, [Validators.email, Validators.required]],
      phone: [null, [Validators.required]],
      bank: [null, [Validators.required]],
      accountType: [null, [Validators.required]],
      accountNumber: [null, [Validators.required]],
    });
  }

  async submit() {
    if (!this.recipientForm?.valid) {
      return;
    }
    this.isSubmitting = true;
    const values = this.recipientForm?.getRawValue();
    if (values && this.user) {
      const dto: AccountDto = {
        ...values,
        accountNumber: parseInt(values.accountNumber) ?? 0,
      };
      try {
        await this.accountService.addRecipient(this.user.id, dto);
        this.snackBar.open('Destinatario creado exitosamente', 'X', { politeness: 'polite' });
      } catch (error) {
        this.snackBar.open('El destinatario no existe', 'X', { politeness: 'polite' });
      }
    }
    this.isSubmitting = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountTypeEnum } from '../../../domain/account/enums/account-type.enum';
import { User } from '../../../domain/user/interfaces/user.interface';
import { AccountService } from '../../../domain/account/services/account.service';
import { UserService } from '../../../domain/user/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Account } from '../../../domain/account/interfaces/account.interface';
import { MatSelectChange } from '@angular/material/select';
import { TransactionService } from '../../../domain/transaction/services/transaction.service';
import { TransactionDto } from '../../../domain/transaction/interfaces/transaction.interface';

@Component({
  selector: 'app-deposit-new',
  templateUrl: './deposit-new.component.html',
  styleUrls: ['./deposit-new.component.scss']
})
export class DepositNewComponent implements OnInit {
  currentRecipient: Account | undefined = undefined
  recipientList: Account[] = [];
  recipientForm: FormGroup | undefined;
  accountTypes = Object.values(AccountTypeEnum);
  user: User | undefined = undefined;
  isSubmitting = false;

  constructor(
    private readonly accountService: AccountService,
    private readonly transactionService: TransactionService,
    private readonly formBuilder: FormBuilder,
    private readonly userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.buildForm();
    this.getRecipients();

  }

  async getRecipients() {
    if (this.user) {
      const recipientResponse = await this.accountService.getRecipients(this.user.id)
      if (recipientResponse) {
        this.recipientList = recipientResponse;
      }
    }

  }

  getUser() {
    this.user = this.userService.get();
  }

  buildForm() {
    this.recipientForm = this.formBuilder.group({
      recipient: [null, [Validators.required]],
      amount: [null, [Validators.required, Validators.maxLength(100)]],
    });
  }

  setCurrentRecipient(event: MatSelectChange) {
    this.currentRecipient = event.value;
  }

  async submit() {
    if (!this.recipientForm?.valid) {
      return;
    }
    this.isSubmitting = true;
    const values = this.recipientForm?.getRawValue();
    if (values && this.user) {
      const dto: TransactionDto = {
        senderId: this.user.id,
        recipientId: values.recipient.id,
        amount: parseInt(values.amount),
      };
      try {
        await this.transactionService.create(dto);
        this.snackBar.open('Monto transferido exitosamente!', 'X', { politeness: 'polite' });
      } catch (error) {
        this.snackBar.open('No se pudo realizar la transferencia', 'X', { politeness: 'polite' });
      }
    }
    this.isSubmitting = false;
  }

}

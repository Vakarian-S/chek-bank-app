import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositNewRoutingModule } from './deposit-new-routing.module';
import { DepositNewComponent } from './pages/deposit-new.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DepositNewComponent
  ],
  imports: [
    CommonModule,
    DepositNewRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class DepositNewModule { }

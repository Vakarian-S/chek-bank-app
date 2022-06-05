import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositNewRoutingModule } from './deposit-new-routing.module';
import { DepositNewComponent } from './pages/deposit-new.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    DepositNewComponent
  ],
  imports: [
    CommonModule,
    DepositNewRoutingModule,
    MatCardModule
  ]
})
export class DepositNewModule { }

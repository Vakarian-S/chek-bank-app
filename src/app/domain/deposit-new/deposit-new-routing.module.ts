import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositNewComponent } from './pages/deposit-new.component';

const routes: Routes = [{ path: '', component: DepositNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositNewRoutingModule {}

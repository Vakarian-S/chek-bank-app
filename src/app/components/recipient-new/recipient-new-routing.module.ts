import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipientNewComponent } from './pages/recipient-new.component';

const routes: Routes = [{ path: '', component: RecipientNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipientNewRoutingModule {}

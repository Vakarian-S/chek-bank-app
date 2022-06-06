import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipientNewRoutingModule } from './recipient-new-routing.module';
import { RecipientNewComponent } from './pages/recipient-new.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    RecipientNewComponent
  ],
  imports: [
    CommonModule,
    RecipientNewRoutingModule,
    MatCardModule
  ]
})
export class RecipientNewModule { }

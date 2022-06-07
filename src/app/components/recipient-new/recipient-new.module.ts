import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipientNewRoutingModule } from './recipient-new-routing.module';
import { RecipientNewComponent } from './pages/recipient-new.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [RecipientNewComponent],
  imports: [
    CommonModule,
    RecipientNewRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
})
export class RecipientNewModule {}

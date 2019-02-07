import { MatListModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { LayoutModule } from '~layout/layout.module';
import { SafeModule } from '~safe/safe.module';
import { AddSafeItemDialogComponent } from './containers/add-safe-item-dialog/add-safe-item-dialog.component';
import { SafeItemFormComponent } from './components/safe-item-form/safe-item-form.component';
import { SafePageComponent } from './containers/safe-page/safe-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserLandingPageComponent, AddSafeItemDialogComponent, SafeItemFormComponent, SafePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    LayoutModule,
    SafeModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [],
  entryComponents: [AddSafeItemDialogComponent],
})
export class UserModule {}

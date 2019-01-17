import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@interstellar/material';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, RouterModule],
  declarations: [LoginComponent],
  entryComponents: [LoginComponent],
  exports: [LoginComponent]
})
export class UiLoginModule {}

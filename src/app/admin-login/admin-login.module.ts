import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';
import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [AdminLoginComponent]
})
export class AdminLoginModule { }

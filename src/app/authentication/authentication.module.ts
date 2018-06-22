import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SharedModule } from  '../shared-modules/shared-modules';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [AuthenticationComponent]
})
export class AuthenticationModule { }

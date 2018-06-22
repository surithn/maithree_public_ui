import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

 
@NgModule({
 imports:      [ CommonModule ],
 declarations: [ ],
 exports:      [ CommonModule, FormsModule, ToastModule ]
})
export class SharedModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchSelectorComponent } from './branch.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  declarations: [BranchSelectorComponent, TeachersComponent, ProductsComponent],
    providers: [],

})
export class BranchSelectorModule { }

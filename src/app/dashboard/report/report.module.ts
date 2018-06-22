import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap/';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [ReportComponent , FilterPipe]
})
export class ReportModule { }
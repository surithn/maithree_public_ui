import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { NgDragDropModule } from 'ng-drag-drop';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgDragDropModule.forRoot()
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

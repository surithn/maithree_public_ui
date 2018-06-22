import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBootstrapModule } from './app.bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { NgDragDropModule } from 'ng-drag-drop';
import * as Hammer from 'hammerjs';
import { LocalStorageModule } from '@ngx-pwa/local-storage';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

/*Feature modules*/

import {DashboardModule} from "./dashboard/dashboard.module"
import {BranchSelectorModule} from "./dashboard/branch/branch.module"
import {JobsModule} from "./dashboard/jobs/jobs.module";
import { ReportModule } from './dashboard/report/report.module';
import { AuthenticationModule } from './authentication/authentication.module';

/**Services **/
import { AppService } from "./services/app-services";
import { ReportService } from './services/report/report.service';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NotificationService } from "./services/notification-services";
import  { AuthInterceptor } from './services/auth-interceptor';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}


@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppBootstrapModule,
    AppRoutingModule,
    DashboardModule,
    BranchSelectorModule,
    HttpClientModule,
    LocalStorageModule,
    JobsModule,
    ReportModule,
    FormsModule,
    AuthenticationModule,
    NgbModule.forRoot(),
    NgDragDropModule.forRoot(),
    BsDatepickerModule.forRoot()

  ],
  providers: [AppService, NotificationService, ReportService, { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig } ,
              {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,}],
  bootstrap: [AppComponent]
})
export class AppModule { }

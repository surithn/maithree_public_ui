import { Component, OnInit, TemplateRef } from '@angular/core';
import {AppService} from '../services/app-services'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NotificationService } from '../services/notification-services';
import { Subscription } from 'rxjs/Subscription';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  


  title = 'app';
  branchesList=[];
  selectedBranch:any;
  subscription: Subscription;
  bsValue = moment(new Date()).format("MM/DD/YYYY");

  constructor(private service: AppService, private nservice: NotificationService) {
    
  }

  ngOnInit() {
    // get branches on start
    this.getBranches();
    this.getSelectedBranch();
  }

  ngAfterViewInit(){
    this.nservice.getBranch().subscribe((branch:any) => {this.selectedBranch  = branch.text})
  }

 /*  ngOnDestroy() {
      this.subscription.unsubscribe();
    }*/

    onChange(branchId) {
      console.log(branchId);
      this.service.changeBranch(branchId);
  }

  getBranches() {
    this.service.getBranches().subscribe((data:any) => {
      this.branchesList = data
    })
  }


  getSelectedBranch() {
    var mthis = this;
   this.service.getDataFromBrowser('branch', function(data){
     mthis.selectedBranch = data.name;
   })
  }

  logout(){
    this.service.logout();
  }

}

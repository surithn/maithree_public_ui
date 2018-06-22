import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app-services'
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification-services';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchSelectorComponent implements OnInit {

  branches=[];

   constructor(private service: AppService, private router: Router, private nservice : NotificationService) { }


  ngOnInit() {
  	this.getListOfBranches();
    this.service.setDataInBrowser("",'branch');
    this.nservice.setbranch("");
  }

  getListOfBranches() {
    this.service.getBranches().subscribe((branches : any) => {
      this.branches = branches;
    })
  }

  tapBranch(branch:Object) {

     this.service.changeBranch(branch['id']);
     this.service.setDataInBrowser(branch,'branch');
     this.service.setBranch(branch['name']);
     this.nservice.setbranch(branch['name']);

     if(branch['id'] > 0) {
       // move to assign job page
       this.router.navigateByUrl('/dashboard/branch/'+branch['id']+'/get-teachers')
     }
  }


}

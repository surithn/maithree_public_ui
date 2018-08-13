import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-services';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(private service: AppService) { }

  branches=[]

  ngOnInit() {
  	this.getListOfBranches();
  }

  getListOfBranches(){
  	this.service.getBranches().subscribe((branches:any) => {
  		this.branches  = branches;
  	});
  }

}

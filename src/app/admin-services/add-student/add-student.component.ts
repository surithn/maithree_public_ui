import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-services';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private service: AppService) { }

  branches=[];
  selectedBranch="";
  

  ngOnInit() {
  	this.getBranchList()
  }

  getBranchList(){
  	this.service.getBranches().subscribe((branches:any) =>  {
  		this.branches = branches;
  	})
  }

}

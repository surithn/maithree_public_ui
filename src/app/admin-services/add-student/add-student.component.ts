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

  branchList=[]

  ngOnInit() {
    this.getBranchList();
    
  }

  getBranchList(){
    console.log("Branch in student")
      this.service.getBranches().subscribe((branches:any) =>  {
        this.branchList = branches;
      })
  }

  getSelectedBranch(){
    //console.log(this.branchList[this.branchSelect])
  }

}

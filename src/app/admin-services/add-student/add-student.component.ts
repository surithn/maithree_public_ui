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
  private productData;
  private states; 
  private taskmapping={
    productSelected:{},
    taskSelected:{}
  };

  ngOnInit() {
    this.getBranchList();
    this.productData = 
      [
        {
          id:"productid1",
          name:"productname1",
          task:[
            {
              id:"taskid1",
              name:"taskid1"
            },
            {
              id:"taskid2",
              name:"taskid2"
            }
          ]
        },
        {
          id:"productid2",
          name:"productname2",
          task:[
            {
              id:"taskid2",
              name:"taskid2"
            },
            {
              id:"taskid3",
              name:"taskid3"
            }
          ]
        },
        {
          id:"productid3",
          name:"productname3",
          task:[
            {
              id:"taskid5",
              name:"taskid5"
            },
            {
              id:"taskid8",
              name:"taskid29"
            }
          ]
        },
      ];

      this.states = [
        {
        "key": "AN",
        "name": "Andaman and Nicobar Islands"
        },
        {
        "key": "AP",
        "name": "Andhra Pradesh"
        },
        {
        "key": "AR",
        "name": "Arunachal Pradesh"
        },
        {
        "key": "AS",
        "name": "Assam"
        },
        {
        "key": "BR",
        "name": "Bihar"
        },
        {
        "key": "CG",
        "name": "Chandigarh"
        },
        {
        "key": "CH",
        "name": "Chhattisgarh"
        },
        {
        "key": "DH",
        "name": "Dadra and Nagar Haveli"
        },
        {
        "key": "DD",
        "name": "Daman and Diu"
        },
        {
        "key": "DL",
        "name": "Delhi"
        },
        {
        "key": "GA",
        "name": "Goa"
        },
        {
        "key": "GJ",
        "name": "Gujarat"
        },
        {
        "key": "HR",
        "name": "Haryana"
        },
        {
        "key": "HP",
        "name": "Himachal Pradesh"
        },
        {
        "key": "JK",
        "name": "Jammu and Kashmir"
        },
        {
        "key": "JH",
        "name": "Jharkhand"
        },
        {
        "key": "KA",
        "name": "Karnataka"
        },
        {
        "key": "KL",
        "name": "Kerala"
        },
        {
        "key": "LD",
        "name": "Lakshadweep"
        },
        {
        "key": "MP",
        "name": "Madhya Pradesh"
        },
        {
        "key": "MH",
        "name": "Maharashtra"
        },
        {
        "key": "MN",
        "name": "Manipur"
        },
        {
        "key": "ML",
        "name": "Meghalaya"
        },
        {
        "key": "MZ",
        "name": "Mizoram"
        },
        {
        "key": "NL",
        "name": "Nagaland"
        },
        {
        "key": "OR",
        "name": "Odisha"
        },
        {
        "key": "PY",
        "name": "Puducherry"
        },
        {
        "key": "PB",
        "name": "Punjab"
        },
        {
        "key": "RJ",
        "name": "Rajasthan"
        },
        {
        "key": "SK",
        "name": "Sikkim"
        },
        {
        "key": "TN",
        "name": "Tamil Nadu"
        },
        {
        "key": "TS",
        "name": "Telangana"
        },
        {
        "key": "TR",
        "name": "Tripura"
        },
        {
        "key": "UK",
        "name": "Uttar Pradesh"
        },
        {
        "key": "UP",
        "name": "Uttarakhand"
        },
        {
        "key": "WB",
        "name": "West Bengal"
        }
        ]
  }

  getBranchList(){
    console.log("Branch in student")
      this.service.getBranches().subscribe((branches:any) =>  {
        this.branchList = branches;
      })
  }

  getSelectedTask(data){
    console.log("check for value", data);
    console.log("taskmapping", this.taskmapping);
  }

  addtoskillset(data){
    console.log("check for value", data);
    console.log("taskmapping", this.taskmapping);
  }

}

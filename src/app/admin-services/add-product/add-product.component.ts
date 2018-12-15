import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-services';
import * as _ from 'lodash';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private service: AppService) { }

  branches=[];
  selectedBranch="";
  productsByBranch=[];
  private branchSelect;
  productRequest={
    productName:"",
    productDescription:"",
    tasks:[
    ],
    branchDetails:[]
  }

  branchList = [
    {
        "id": 1001,
        "name": "WEST MAMBALAM",
        "code": "WMB",
        "phone_no": "9677176434",
        "address": "No. 25, Vasudevapuram Street, West Mambalam,",
        "contact_person": "Mrs. Sharmila",
        "created_date": "2018-05-15 22:02:05",
        "created_by": "system",
        "active": "Y"
    },
    {
        "id": 1002,
        "name": "K.K. NAGAR",
        "code": "KKN",
        "phone_no": "7010095734",
        "address": "No. 5, Pallavan Salai, Nesapakkam,Chennai – 600 078",
        "contact_person": "Mrs. Malathi",
        "created_date": "2018-05-15 22:36:13",
        "created_by": "system",
        "active": "Y"
    },
    {
        "id": 1003,
        "name": "ULLAGARAM",
        "code": "ULL",
        "phone_no": "9840484902",
        "address": "No.1, Hindu Colony,1 Main Road, Ullagaram,Chennai – 600 091",
        "contact_person": "Mrs. Arunmozhi",
        "created_date": "2018-05-15 22:36:13",
        "created_by": "system",
        "active": "Y"
    },
    {
        "id": 1004,
        "name": "TAMBARAM EAST",
        "code": "TME",
        "phone_no": "9445474170",
        "address": "10, Tan Avenue, Prasanthi Colony, Rajakeelpakkam,Near (Guruvayurappa Temple)Chennai – 600 073",
        "contact_person": "Mrs. Ranjini",
        "created_date": "2018-05-15 22:36:13",
        "created_by": "system",
        "active": "Y"
    },
    {
        "id": 1005,
        "name": "TAMBARAM WEST",
        "code": "TMW",
        "phone_no": "9962700264",
        "address": "No.220, G.S.T. Road (Valluvar Gurukulam Campus),West Tambaram, Chennai – 600 045.",
        "contact_person": "Mrs. Shankari",
        "created_date": "2018-05-15 22:36:13",
        "created_by": "system",
        "active": "Y"
    },
    {
        "id": 1006,
        "name": "PERAMBUR",
        "code": "PER",
        "phone_no": "9444625288",
        "address": "Old No.28, New No.98, Krishnadoss Road, Mangalapuram,",
        "contact_person": "Mrs. Krishnapriya",
        "created_date": "2018-05-15 21:58:56",
        "created_by": "system",
        "active": "Y"
    }
  ]

  productList=[
    {
        "id": 13,
        "name": "Silk bed sheet"
    },
    {
        "id": 14,
        "name": "Silk bed sheet"
    }
  ]

  dropdownBranchList=[]
  tagsBranchList=[]


  addProduct = true;
  updateProduct = false;

  ngOnInit() {
    this.getBranchList();
    this.dropdownBranchList=this.branchList;
  }

  getBranchList(){
  	this.service.getBranches().subscribe((branches:any) =>  {
  		this.branches = branches;
  	})
    console.log("Braches",this.branches)
  }

  getProductsByBranch(id: string) {
  	this.service.getProductListForBranch(id).subscribe((prod:any) => {
  		this.productsByBranch = prod;
  	})
  }
  private newAttribute: any = {};


  addFieldValue() {
      this.productRequest.tasks.push(this.newAttribute);
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.productRequest.tasks.splice(index, 1);
  }

  submitProduct(){
    console.log("Inside submit product",this.productRequest)
  }

  showAddProduct(){
  console.log("In showAddProduct()");
    this.addProduct = true;
    this.updateProduct = false;
  }

  showUpdateProduct(){
  console.log("In showUpdateProduct()");
    this.addProduct = false;
    this.updateProduct = true;
  }

  getSelectedBranch(){
  var branchSelectedList = this.productRequest.branchDetails;
  var flag=false, that = this;
  branchSelectedList.forEach(function(data){
    if(data.branchId == that.branchList[that.branchSelect].id){
      flag=true;
    }
  })
  if(!flag){
  this.productRequest.branchDetails.push({
        branchName : this.branchList[this.branchSelect].name,
        branchId:this.branchList[this.branchSelect].id
      });
      }
  

  }
}

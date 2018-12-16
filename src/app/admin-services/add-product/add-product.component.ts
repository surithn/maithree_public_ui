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

  addSuccessMessage = false;
  responseMessage="";
  updateSuccessMessage = false;
  branches=[];
  selectedBranch="";
  productsByBranch=[];
  private branchSelect;
  productRequest={
    productId:"",
    productName:"",
    productDescription:"",
    tasks:[],
    branchDetails:[],
    isActivity: ""
  }

  productSelect=""

  branchList=[]
  updateBranchList=[]
  productList=[]

  dropdownBranchList=[]
  tagsBranchList=[]


  addProduct = true;
  updateProduct = false;

  ngOnInit() {
    this.getBranchList();
    
  }

  getBranchList(){
  	this.service.getBranches().subscribe((branches:any) =>  {
  		this.branchList = branches;
  	})
  }

  addProducts(){
  var that = this;
  this.service.addProduct(this.productRequest).subscribe((resp:any) =>  {
      that.addSuccessMessage = resp.status;
      if(resp.status){
        that.responseMessage = "Product Added Successfully";
      } else {
        that.responseMessage = "Please enter valid details to add product";
      }
      console.log(resp);
    })
  }
  
  editProducts(){
  var that = this;
  this.service.editProduct(this.productRequest).subscribe((resp:any) =>  {
      that.updateSuccessMessage = resp.status;
      if(resp.status){
        that.responseMessage = "Product Updated Successfully";
      } else {
        that.responseMessage = "Please enter valid details to update product";
      }
      console.log(resp);
    })
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

  submitProduct(isEdit){
  console.log("isEdit",isEdit)
    if(isEdit){
      this.productRequest.productId = this.productList[this.productSelect].id;
      console.log("Inside submit product",this.productRequest);
      this.editProducts();
    }
    else
    {
      console.log("Inside submit product",this.productRequest);
      this.addProducts();
    }
  }

  showAddProduct(){
  console.log("In showAddProduct()");
    this.productRequest.tasks=[];
    this.productRequest.branchDetails=[];
    this.addProduct = true;
    this.updateProduct = false;
    this.addSuccessMessage=false;
    this.updateSuccessMessage= false;
  }

  showUpdateProduct(){
  console.log("In showUpdateProduct()");
    this.addProduct = false;
    this.updateProduct = true;
    this.productRequest.tasks=[];
    this.service.getProducts().subscribe((products:any) =>  {
      this.productList = products;
    });
    this.addSuccessMessage=false;
    this.updateSuccessMessage= false;
  }

  getSelectedProductDetails(){
    this.service.getSelectedProductDetails(this.productList[this.productSelect].id).subscribe((productDetails:any) =>  {
    //this.updateBranchList=productDetails.branches;
    this.productRequest.branchDetails=productDetails.branches;
    this.productRequest.tasks=productDetails.tasks;
    // console.log(this.productList[this.productSelect].productName);
    // console.log(this.productList[this.productSelect].productDescription);
    // console.log(this.productList[this.productSelect].isActivity);
    // this.productRequest.productName = this.productList[this.productSelect].productName;
    // this.productRequest.productDescription = this.productList[this.productSelect].productDescription;
    this.productRequest.isActivity = this.productList[this.productSelect].isActivity;
      console.log("productDetails",productDetails.branches);
    })
  }

  getSelectedBranch(){
    var branchSelectedList = this.productRequest.branchDetails;
    var flag=false, that = this;
    branchSelectedList.forEach(function(data){
      if(data.id == that.branchList[that.branchSelect].id){
        flag=true;
        }
    })
    if(!flag){
     this.productRequest.branchDetails.push({
        name : this.branchList[this.branchSelect].name,
        id:this.branchList[this.branchSelect].id
      });
    }
  }
}

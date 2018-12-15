import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-services';

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

  productRequest={
    productName:"",
    productDescription:"",
    tasks:[
    ],
    branchIds:[]
  }

  addProduct = true;
  updateProduct = false;

  ngOnInit() {
    this.getBranchList()
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
  
}

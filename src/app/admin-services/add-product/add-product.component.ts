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

  ngOnInit() {
    this.getBranchList()
    this.fieldArray = [
      {taskName: "TAKES 2.5 MTS OF PLAIN WHITE CLOTH", taskDesc:""}, 
      {taskName: "MARKS DOTS ON THE WHITE CLOTH (THE DOTS HELPS IN CREATING DESIGN)", taskDesc:""}, 
      {taskName: "HOLD THE CLOTH IN ONE HAND AND TIES THREAD AROUND THE CLOTH TIGHTLY AT THE DOT", taskDesc:""}, 
      {taskName: "TAKES 3 LTS O WATER AND ALLOWS IT TO BOIL AT 90 C AND ADDS 1 TEASPOON", taskDesc:""}, 
      {taskName: "SOAKS THE WHITE CLOTH IN COLOURED WATER AND STIRS THE CLOTH IN THE LIQUID WITH THE WOODEN LADDLE FOR COLOURING", taskDesc:""}, 
      {taskName: "KEEPS THE CLOTH ASIDE OR 20 MINUTS", taskDesc:""}, 
      {taskName: "KEEPS THE CLOTH ASIDE OR 20 MINUTS", taskDesc:""}, 
      {taskName: "KEEPS THE CLOTH ASIDE OR 20 MINUTS", taskDesc:""}, 
      {taskName: "KEEPS THE CLOTH ASIDE OR 20 MINUTS", taskDesc:""}, 
      {taskName: "KEEPS THE CLOTH ASIDE OR 20 MINUTS", taskDesc:""}, 
      {taskName: "KEEPS THE CLOTH ASIDE OR 20 MINUTS", taskDesc:""}, 
      {taskName: "KEEPS THE CLOTH ASIDE OR 20 MINUTS", taskDesc:""}
    ]
  }

  getBranchList(){
  	this.service.getBranches().subscribe((branches:any) =>  {
  		this.branches = branches;
  	})
  }

  getProductsByBranch(id: string) {
  	this.service.getProductListForBranch(id).subscribe((prod:any) => {
  		this.productsByBranch = prod;
  	})
  }
  
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }

  submitProduct(){
    console.log(this.fieldArray)
  }
  
}

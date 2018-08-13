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
}

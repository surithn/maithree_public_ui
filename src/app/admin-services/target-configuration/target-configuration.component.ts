import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app-services'
import {ReportService} from '../../services/report/report.service'

@Component({
  selector: 'app-target-configuration',
  templateUrl: './target-configuration.component.html',
  styleUrls: ['./target-configuration.component.css']
})
export class TargetConfigurationComponent implements OnInit {

  constructor(private service: AppService, private reportService : ReportService) { }

  branches=[];
  selectedBranch="";
  productList = [];
  dataList:any;
  monthList=[];
  selectedMonth = ""

  ngOnInit() {
    this.getListOfBranches();
    this.getMonth();
    this.getListOfProducts();
  }

  getMonth(){
    this.monthList = this.reportService.monthNames;
  }

  getListOfBranches() {
    this.service.getBranches().subscribe((branches : any) => {
      this.branches = branches;
    })
  }

  getListOfProducts() {
    this.service.getProductList().subscribe((products : any) => {
      for(let i in products){
        products[i].data = new Array(this.branches.length);
      }
      this.productList = products;
    })
  }



  getProductsAgainstBranch(id: string) {
    this.service.getProductListForBranch(id).subscribe((products : any) => {
      for(let i in products){
        products[i].data = [1,2,3,4,5,6,7,8,9,10,11,12]
      }
      this.productList = products;
    })
  }

  updateTarget() {
    console.log("Update target")

  }



}

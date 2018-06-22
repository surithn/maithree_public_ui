import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppService} from '../../services/app-services'

import * as moment from 'moment';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  private branchId: string;
  private savedProducts = [];
  private BASE_URL_IMAGES = '';
  private showDetails = false;
  private jobDetails = null;
  private session = true;
  private quantity = 0;
  private comments = '';
  private selectedProduct = null;
  private today = new Date();
  private targetMap = {};
  private completedCount = 0;
  private targetStartDate = moment(new Date()).startOf("month").format("MMMM YYYY");
  private price = 0;

  constructor(private activeRoute: ActivatedRoute, private service: AppService) { }

  ngOnInit() {
  		// get branch id
  		this.activeRoute.params.subscribe(params => {
  			this.branchId = params['branchId'];
  		  this.getSavedProductsList(this.branchId);
  		});
      this.BASE_URL_IMAGES = this.service.getImageBaseUrl();
  }

  getSavedProductsList(branchId: string) {
    this.service.getSavedProducts(branchId).subscribe((products:any) => {
      this.service.getTargetByBranch(branchId).subscribe((targets:any) => {
        this.savedProducts = products;
        this.targetMap = targets;
      });
    });
  }

  getJobDetails(branchProductId: string) {
    this.service.getJobDetails(branchProductId).subscribe((details) => {
      this.service.getDetailsOfBranchProduct(branchProductId).subscribe((rslts) => {
        this.jobDetails = details;
        this.session = true;
        this.quantity = 0;
        this.comments = '';
        this.completedCount = rslts && rslts["count"] && rslts["count"][0] && rslts["count"][0]["completedCount"] || 0;
        this.price = rslts && rslts["price"] && rslts["price"][0] && rslts["price"][0]["price"] || 0;
        window.scrollTo(0, 0);
      });
    });
  }

  updateProductDetails(item: any) {
   this.addSelectedClass(item);
  }

  addSelectedClass(item: any){
    this.showDetails = true;
    for(var i in this.savedProducts){
      if(this.savedProducts[i].branch_product_id == item.branch_product_id){
        this.savedProducts[i].isSelected=true;
        this.selectedProduct = this.savedProducts[i];
      }else{
         this.savedProducts[i].isSelected=false;
      }
    }
  }

  saveJob() {
    var that = this;
    that.service.getDataFromBrowser('selectedTeacher', function(teacherID) {
      const obj = {
        'bp_id': that.jobDetails[0].bp_id,
        'member_code': teacherID,
        'isEndDay' : that.session ? 'N' : 'Y',
        'quantity': that.quantity,
        'created_date' : new Date(),
        'comments': that.comments
      };
      that.service.updateJobDetails(obj).subscribe((data:any) => {
        that.getUpdatedJobDetails(obj);
      });
  });
  }

  getUpdatedJobDetails(obj : any){
    this.service.getJobDetails(obj.bp_id).subscribe((details:any) => {
      this.jobDetails = details;
      this.session = true;
      this.quantity = 0;
      this.comments = '';
      this.completedCount += obj.quantity;
      for(var i in this.savedProducts){
        if(this.savedProducts[i].branch_product_id == (obj.bp_id)){
          this.savedProducts[i].product_quantity += obj.quantity;
        }
      }
    })
  }


}

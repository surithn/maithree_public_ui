import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from  '../../../services/app-services';
import { Router } from '@angular/router';
import * as _ from "lodash";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private branchId: string;
  private productList = [];
  private selectedProducts = [];
  private selectedIndex = [];
  private savedProducts = [];

  private BASE_URL_IMAGES = '';
  private throwError = false;

  constructor(private activeRoute: ActivatedRoute, private service: AppService, private router: Router) { }

  ngOnInit() {
  	this.activeRoute.params.subscribe(params => {
  			this.branchId = params['id'];
        this.getProductsForBranch(this.branchId);
    });

  	this.BASE_URL_IMAGES = this.service.getImageBaseUrl();
  	}

  getProductsForBranch(id: string) {
  	this.service.getProductListForBranch(id).subscribe((products)=>{
      this.getSavedProductsList(this.branchId , products);
  	});
  }

  getSavedProductsList(branchId: string, products: any) {
    this.service.getSavedProducts(branchId).subscribe((savedProducts:any) => {
      this.savedProducts = savedProducts;

      const savedProductNames  = _.map(savedProducts , 'product_name');

      this.productList = products.map((p, i) => {
         return {
           ...p,
           isAlrdySelected : savedProductNames.indexOf(p.name) !== -1
         };
      });
    });
  }

  selectProducts(item: any, event: any ) {
  		var isNotFound = this.selectedProducts.findIndex(prod => prod.id === item.id);
  		if(isNotFound < 0){
  			this.selectedProducts.push(item);
  			this.selectedIndex.push(item.id);
  		}else {
  			this.selectedProducts.splice(isNotFound , 1);
  			this.selectedIndex.splice(isNotFound, 1);
  		}

  }

  saveProducts() {
  	//get branch id and teacher id

    if(this.selectedProducts.length <=0 && this.savedProducts.length <=0 ) {
      this.throwError = true;
      return;
    }

  	var _this = this;
  	_this.service.getDataFromBrowser('selectedTeacher', function(teacherID){
  		var teacherId = teacherID;
  		_this.service.getDataFromBrowser('', function(branchID) {
  			var branchId = branchID;
  			var dataArr=[];
  			for(var  i in _this.selectedProducts) {
  				var temp = { "bp_id":"1", "member_code":teacherId, "isEndDay" :"","quantity": 0 , "created_date" : new Date(), "comments": ""};
  				temp.bp_id = _this.selectedProducts[i].id
          temp.member_code = teacherId;
         	dataArr.push(temp);
  			}
        _this.service.saveChoosenProducts(dataArr).subscribe((data: any)=>{
  				 _this.router.navigateByUrl('/dashboard/jobs/'+_this.branchId)
  			});
  		})
  	});
  }



}

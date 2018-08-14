import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-services'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: AppService) { }

  branchesCount = 0;
  productsCount: any;


  ngOnInit() {
 	this.getDashBoardCards();
  }

  getDashBoardCards() {
  	
  	this.service.getBranches().subscribe((data: any)=>{
  		this.branchesCount = data.length;
  	});

  	this.service.getProductList(null).subscribe((data)=>{
  		this.productsCount = data;
  	})

	}
}
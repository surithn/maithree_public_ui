import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-services'
import { ReportService } from '../../services/report/report.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private overallData=[];
  constructor(private reportService: ReportService,private service: AppService) { }

  branchesCount = 0;
  productsCount: any;

  getSummaryTotal() {
    this.reportService.getSummaryTotal().subscribe(data => {
    this.overallData = data;
    })
  }

  ngOnInit() {
  //  this.getDashBoardCards();
   this.getSummaryTotal();
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
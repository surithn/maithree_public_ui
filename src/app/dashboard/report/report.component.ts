import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report/report.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import * as _ from "lodash";
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import * as moment from 'moment';
import { AppService } from '../../services/app-services';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  fromDate = {};
  toDate = {};
  reportResult = [];
  branchWiseDataSummary = [];
  branchWiseData = [];
  switchTabs = false;
  branches=[];
  selectedBranch="0101";
  private overallData=[];

  constructor(private reportService: ReportService, private service: AppService) { }
  groupBranch:any;
  branch = {
    name : "",
    products : [
      {name:"", count : ""}
    ]
  };
  searchByBranch = '';
  searchByProduct = ''

  tabs={
    "tab1" : false,
    "tab2" : false,
    "tab3" : false,
    "tab4" : true
  }



  ngOnInit() {
    this.getInventries();
    this.getInventryInfoBasedOnBranch();
    this.getBranches();

    this.overallData = [
      {
        "name" : "Branches",
        "value" : "branches",
        "count" : 7
      },
      {
        "name" : "Staffs",
        "value" : "staffs",
        "count" : 7
      },
      {
        "name" : "Students",
        "value" : "students",
        "count" : 300
      },
      {
        "name" : "Products",
        "value" : "Products",
        "count" : 40
      }
    ]
  }

  getInventries() {
  	this.reportService.getAllInventoryReport().subscribe(data => {
      this.reportResult = data;
    })
  }

  getBranches() {
      this.service.getBranches().subscribe((branches:any) =>  {
      this.branches = branches;
    })
  }

  getInventryInfoBasedOnBranch() {
    this.reportService.getInventoryDataBasedOnbranch().subscribe(data=>{
       var result = _.chain(data)
              .groupBy("branch_name")
              .toPairs()
              .map(function(currentItem) {
                  return _.fromPairs(_.zip(["branch", "products"], currentItem));
              })
              .value();
              this.branchWiseData = result;

    })
  }

  search() {
    this.reportService.getAllInventoryReportByDate(this.fromDate, this.toDate).subscribe(data => {
      this.reportResult = data;
    });
  }
  downloadReport () {
   const rslt = this.reportResult.map((rs, i) => {
      return {
        'Branch' : rs.branch_name,
        'Product' : rs.product_name,
        'Quantity' : rs.quantity,
        'Session' : rs.enter_session,
        'Submitted By' : rs.entered_by,
        'Date' : moment(rs.entered_date).format('DD/MM/YYYY hh:mm:ss'),
        'Comments' : rs.comments || ''
      };
    });
    const options = {
      showLabels: true,
      showTitle: true,
      title : 'Maithree Report',
      headers: ['Branch', 'Product', 'Quantity' , 'Session' , 'Submitted By', 'Date' , 'Comments']
    };
   const rpt = new Angular5Csv(rslt, 'Maithree Report ' + moment(new Date()).format('DD/MM/YYYY'), options );
  }

  switchTab(id){
    for(var i in this.tabs) {
      this.tabs[i] = false;
    }
    this.tabs[id] = true;
  }

  getSummaryForBranch(selectedBranch){
    this.reportService.getSummaryBasedOnBranch(selectedBranch).subscribe((summary: any) => {

      let monthNames = this.reportService.monthNames;
        for(let i in summary) {
            let date = new Date(summary[i].date)
            let month = _.findIndex(monthNames , {value : date.getMonth()});
            summary[i].month = monthNames[month].text;
        }

        this.branchWiseDataSummary = summary;
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report/report.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import * as _ from "lodash";
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import * as moment from 'moment';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  fromDate = {};
  toDate = {};
  reportResult = [];
  branchWiseData = [];
  switchTabs = false;
  constructor(private reportService: ReportService) { }
  groupBranch:any;
  branch = {
    name : "",
    products : [
      {name:"", count : ""}
    ]
  };
  searchByBranch = '';
  searchByProduct = ''

  ngOnInit() {
    this.getInventries();
    this.getInventryInfoBasedOnBranch();
  }

  getInventries() {
  	this.reportService.getAllInventoryReport().subscribe(data => {
      this.reportResult = data;
      console.log(data);
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
              console.log(result)
              this.branchWiseData = result;

    })
  }

  search() {
    this.reportService.getAllInventoryReportByDate(this.fromDate, this.toDate).subscribe(data => {
      this.reportResult = data;
      console.log(data);
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

}

import { Component, OnInit } from '@angular/core';
declare var $: any; 
import {AppService} from '../services/app-services';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.css']
})
export class AdminServicesComponent implements OnInit {

  constructor(private service : AppService) { }

  ngOnInit() {


    $('[data-toggle="offcanvas"]').on("click", function() {
      $('.sidebar-offcanvas').toggleClass('active')
    });

    $('#sidebarToggle').on('click', function(){
    	$('#page-top').toggleClass("sidebar-toggled");
    	$(".sidebar").toggleClass("toggled")
    })

}

  logout(){
    this.service.logout();
  }


}
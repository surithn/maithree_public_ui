import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router) { }
   loginFrom: FormGroup;

    user:any={
  	"username":"",
  	"password":""
  }


  ngOnInit() {
  	 this.loginFrom = new FormGroup({
      username : new FormControl(null, Validators.compose([Validators.required])),
      password : new FormControl(null, Validators.compose([Validators.required]))
    })
  }

  authenticateUser(){
  		console.log(this.user)
      this.router.navigateByUrl('/admin-dashboard')

  }

}

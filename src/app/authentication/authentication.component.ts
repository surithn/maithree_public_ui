import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app-services'
import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor( private router: Router, private service: AppService, public toastr: ToastsManager,
    vcr: ViewContainerRef ) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  loginFrom: FormGroup;

  user:any={
  	"username":"",
  	"password":""
  }

  ngOnInit() {
    var checkToken = window.localStorage.getItem("mi3userToken")
    if(checkToken != "null") {
      this.router.navigateByUrl('/dashboard')
    }else {
      console.log("Need Authorisation ?!")
    }

    this.loginFrom = new FormGroup({
      username : new FormControl(null, Validators.compose([Validators.required])),
      password : new FormControl(null, Validators.compose([Validators.required]))
    })


  }


  authenticateUser(){
  	this.service.login(this.user).subscribe(resp => {
      if(resp['token']) {
        window.localStorage.setItem('mi3userToken',resp['token']);
        setTimeout(()=>{
           this.router.navigateByUrl('/dashboard')
        }, 1000);
      }else {
           this.toastr.error('Invalid Username / Password', 'Oops!');

      }
    })
 	 
  }


}

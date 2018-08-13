import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse ,HttpErrorResponse} from '@angular/common/http';
import { AppService } from './app-services';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private service : AppService) {

  }

  public getToken(): string {
    return localStorage.getItem('mi3userToken');
  }


intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const token = this.getToken();
  const changedReq = req.clone({headers: req.headers.set('auth', token)});
  if(token ==null || token == "null") {
     window.localStorage.setItem("mi3userToken", null);
     this.service.logout();
  }
  return next.handle(changedReq).do((event: HttpEvent<any>) => {
    if (event instanceof HttpResponse) {
      // do stuff with response if you want
    }
  }, (err: any) => {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        console.log("401")
         window.localStorage.setItem("mi3userToken", null);
        this.service.logout();
      }
    }
  });
 }
}
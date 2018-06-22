import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


 
@Injectable()
export class NotificationService {
    private subject = new Subject<any>();

    constructor( public toastr: ToastsManager ){}
 
    setbranch(message: string) {
        console.log(message)
        this.subject.next({ text: message });
    }
 
    clearBranch() {
        this.subject.next();
    }
 
    getBranch(): Observable<any> {
        return this.subject.asObservable();
    }
}
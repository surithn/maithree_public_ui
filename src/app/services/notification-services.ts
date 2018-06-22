import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {
    private subject = new Subject<any>();

    setbranch(message: string) {
        this.subject.next({ text: message });
    }

    clearBranch() {
        this.subject.next();
    }

    getBranch(): Observable<any> {
        return this.subject.asObservable();
    }
}

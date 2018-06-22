import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './authentication.component';

const routes: Routes = [
    {
        path: 'login', component: AuthenticationComponent,
        data: {
	      "title": "Dashboard"
	    }
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthenticationRoutingModule {
}

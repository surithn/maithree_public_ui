import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//feature modules
import { AdminServicesComponent } from './admin-services.component';

import { TargetConfigurationComponent } from './target-configuration/target-configuration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';

export const routes: Routes = [
        { path: 'admin-dashboard', component: AdminServicesComponent, 
        children:[
        	 { path: '', redirectTo: 'home', pathMatch:'full'},
        	 { path: 'home', component: DashboardComponent},
        	 { path: 'target-configuration', component: TargetConfigurationComponent},
           { path: 'add-branch', component: AddBranchComponent},
           { path: 'add-product', component: AddProductComponent},
           { path: 'add-student', component: AddStudentComponent},
           { path: 'add-teacher', component: AddTeacherComponent},
           { path: 'update-student', component: UpdateStudentComponent},
           { path: 'update-teacher', component: UpdateTeacherComponent}
        ]},
  		
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  providers: []
})
export class AdminServicesRoutingModule { }

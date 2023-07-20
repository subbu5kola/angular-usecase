import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { RequestComponent } from './request/request.component';


const routes: Routes = [{path:'',redirectTo:'employees',pathMatch:'full'},
{path:'employees',component:ManagerComponent},
{path:'employee/request',component:RequestComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { FormTdfComponent } from './form-tdf/form-tdf.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

const routes: Routes = [
  {path: '',   redirectTo: 'employee', pathMatch: 'full' },
  {path : 'employee', component :EmployeeComponent},
  {path : 'form-tdf', component : FormTdfComponent},
  {path : 'form-reactive', component : FormReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

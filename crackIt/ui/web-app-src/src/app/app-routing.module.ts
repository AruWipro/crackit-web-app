import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployeeCornerComponent } from './employee-corner/employee-corner.component';
import { EmployersComponent } from './employers/employers.component';
import { HomeComponent } from './home/home.component';
import { JobSeekersComponent } from './job-seekers/job-seekers.component';
import { StaffingServiceComponent } from './staffing-service/staffing-service.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'staffingService',
    component: StaffingServiceComponent
  },
  {
    path: 'employers',
    component: EmployersComponent
  },
  {
    path: 'jobSeekers',
    component: JobSeekersComponent
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'employeeCorner',
    component: EmployeeCornerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

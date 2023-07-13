import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CanloadService } from './factory/canload.service';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ActivateService } from './factory/activate.service';
import { ResolveService } from './factory/resolve.service';
import { CustompreloadService } from './factory/custompreload.service';
import { FormsSaveService } from './factory/FormsSave.Service';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children:
     [
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'service', component: ServiceComponent },        
        { path: '', redirectTo: 'service', pathMatch: 'full' }
     ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((c) => c.AdminModule),
    data: { preload: true },
    canLoad: [CanloadService],
    canActivate: [ActivateService],
    canDeactivate: [FormsSaveService],
    resolve: {listdata : ResolveService}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustompreloadService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

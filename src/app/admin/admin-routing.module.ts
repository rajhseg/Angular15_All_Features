import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from "./home/home.component";
import { FormsSaveService } from "../factory/FormsSave.Service";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'about', component: AboutComponent, canDeactivate: [FormsSaveService] },
      { path: 'contact', component: ContactComponent, canDeactivate: [FormsSaveService] },
      { path: 'service', component: ServiceComponent },
      { path: '', redirectTo: 'about', pathMatch: 'full' }
    ]
  }
];

@NgModule({  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouting {

}

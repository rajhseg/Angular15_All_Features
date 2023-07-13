import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminRouting } from './admin-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { RforDirective } from '../directives/rfor.directive';
import { RIfDirective } from '../directives/rif.directive';
import { RHighlightDirective } from '../directives/rhighlight.directive';
import { RSwitchCaseDirective, RSwitchDirective } from '../directives/rswitch.directive';
import { RpanelComponent } from './rpanel/rpanel.component';
import { RpanelheaderComponent } from './rpanelheader/rpanelheader.component';
import { RpanelrowComponent } from './rpanelrow/rpanelrow.component';
import { MatchRowDataSizeDirective } from './rpanelrow/rmatchrowdatasize.directive';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    RforDirective,
    RIfDirective,
    RHighlightDirective,
    RSwitchDirective,
    RSwitchCaseDirective,    
    RpanelComponent,
    RpanelheaderComponent,
    RpanelrowComponent,
    MatchRowDataSizeDirective
  ],
  imports: [
    CommonModule,
    AdminRouting
  ]
})
export class AdminModule { }

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppConfig, App_Config, LoggerService } from './appconfig'
import { ConsoleLogger } from './Logs/ConsoleLogger';
import { DBLogger } from './Logs/DBLogger';
import { Logger } from './Logs/Logger';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { RetryInterceptor } from './retry.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: App_Config,
      useFactory: (httpCli: HttpClient) => { return { isDev: false, http: httpCli } },
      deps: [HttpClient]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RetryInterceptor,
      multi: true
    },
    {
      provide: LoggerService,
      useFactory: (config: AppConfig) => {
        if (config.isDev)
          return new ConsoleLogger();
        else
          return new DBLogger();
      },
      deps:[App_Config]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

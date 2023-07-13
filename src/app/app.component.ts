import { Component, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService, App_Config } from './appconfig'
import { Logger } from './Logs/Logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleApp';



  constructor(@Inject(LoggerService) private logger: Logger, private translate: TranslateService) {
    translate.setDefaultLang("au");
    translate.use("au");
    logger.Log("AppComponent Logs");
  }
}

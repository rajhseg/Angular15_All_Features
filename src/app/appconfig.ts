import { InjectionToken } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Logger } from './Logs/Logger';

export interface AppConfig {
  isDev: boolean,
  http: HttpClient
}

export const App_Config = new InjectionToken<AppConfig>("appconfig");
export const LoggerService = new InjectionToken<Logger>("logger");

import { Logger } from './Logger'

export class DBLogger extends Logger {
  override LogInfo(message: string): void {
    console.log("DB Logger message: " + message);
  }
}

import { Logger } from './Logger'

export class ConsoleLogger extends Logger {
  override LogInfo(message: string): void {
    console.log("Message Logs in Console : " + message);
  }
}

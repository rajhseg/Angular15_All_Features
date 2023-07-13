export abstract class Logger {

  protected abstract LogInfo(message: string): void

  public Log(message: string): void {
    console.log("Log message starts");
    this.LogInfo(message);
    console.log("Log message ends");
  }

}

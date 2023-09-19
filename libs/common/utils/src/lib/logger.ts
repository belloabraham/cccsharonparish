export class LoggerUtil {
  static error(context: any, method: any, error: any) {
    console.error(`${context.name} -> method: ${method.name} -> ${error}`);
  }
}

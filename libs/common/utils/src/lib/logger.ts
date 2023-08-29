export class LoggerUtil {
  static error(context: any, methodName: string, error: any) {
    console.error(
      `Context: ${context}, Action: ${methodName}, Error: ${error}`
    );
  }
}

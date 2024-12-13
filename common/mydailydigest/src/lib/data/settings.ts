export class Settings {
  static themeKey(domain: string) {
    return `${domain}-theme`;
  }
  static loginEmailKey(domain: string) {
    return `${domain}-login-email`;
  }
}

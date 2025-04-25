export type DeviceType = 'Android' | 'iOS' | 'Unknown';

export class Device {
  static type(): DeviceType {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android')) {
      return 'Android';
    }
    if (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/macintosh|mac os x/i) ||
      navigator.userAgent.match(/iPad/i)
    ) {
      return 'iOS';
    }
    return 'Unknown';
  }
}

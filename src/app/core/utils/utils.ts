export class Utils {

  static clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

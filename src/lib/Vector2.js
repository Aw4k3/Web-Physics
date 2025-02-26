export default class Vector2 {
  x = 0;
  y = 0;
  normalisedX = 0;
  normalisedY = 0;

  /**
   * @constructor
   * @param {number} x
   * @param {number} y
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.normalise();
  }

  /**
   * 
   * @param {number} x x component
   * @param {number} y y component
   */
  setVector(x, y) {
    this.x = x;
    this.y = y;
    this.normalise();
  }

  getRotation() {
    this.normalise();
    return (Math.atan2(this.normalisedY, this.normalisedX) * 180) / Math.PI;
  }

  normalise() {
    let length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    if (length === 0) {
      this.normalisedX = 0;
      this.normalisedY = 0;
    } else {
      this.normalisedX = this.x / length;
      this.normalisedY = this.y / length;
    }
  }

  /**
   * @description Adds a vector to the current vector
   * @param {Vector2} vector
   */
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  /**
   * 
   * @param {Vector2} a 
   * @param {Vector2} b 
   * @returns VectorA + VectorB
   */
  static add(a, b) {
    return new Vector2(a.x + b.x, a.y + b.y);
  }

  /**
   * 
   * @param {Vector2} a 
   * @param {Vector2} b 
   * @returns VectorA * VectorB
   */
  static multiply(a, b) {
    return new Vector2(a.x * b.x, a.y * b.y);
  }

  static lerp(a, b, t) {
    return new Vector2(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
  }

  static equals(a, b) {
    return a.x === b.x && a.y === b.y;
  }

  static vector2(x, y) {
    return { x, y };
  }
}

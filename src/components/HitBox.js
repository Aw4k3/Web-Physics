import engine from "./Engine.js";
import Vector2 from "./Vector2.js";

export default class HitBox {
  start = Vector2.vector2(0, 0);
  end = Vector2.vector2(0, 0);
  drawHitBox = false;
  canvas = document.createElement("canvas");
  ctx = this.canvas.getContext("2d");

  /**
   * 
   * @param {{x: number, y: number}} start Vector2.vector2()
   * @param {{x: number, y: number}} end Vector2.vector2()
   */
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.canvas.width = engine.resolution.x;
    this.canvas.height = engine.resolution.y;
    this.canvas.style.position = "absolute";
    setInterval(() => this.tick(), engine.deltaTime * 1000);
  }

  /**
   * 
   * @param {HitBox} hitBox
   * @returns {boolean}
   */
  isOverlapped(hitBox) {
    return (
      this.start.x < hitBox.end.x &&
      this.end.x > hitBox.start.x &&
      this.start.y < hitBox.end.y &&
      this.end.y > hitBox.start.y
    );
  }

  showHitBox() {
    engine.viewport.appendChild(this.canvas);
  }

  tick() {
    this.ctx.clearRect(0, 0, engine.resolution.x, engine.resolution.y);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "red";
    this.ctx.strokeRect(this.start.x, this.start.y, this.end.x - this.start.x, this.end.y - this.start.y);
  }
}
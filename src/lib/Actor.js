import engine from "./Engine.js";
import Vector2 from "./Vector2.js";

export default class Actor {
  position = new Vector2();
  rotation = 0;
  size = new Vector2(64, 64);
  sprite = document.createElement("div");
  parent = viewport;

  /**
   * @param {number} deg 
   */
  rotate(deg) {
    this.rotation += deg;
    this.sprite.style.rotate = `${this.rotation}deg`;
  }

  /**
   * @param {Vector2} position
   */
  setPosition(position) {
    this.position.setVector(position.x, position.y);
    this.sprite.style.left = `${this.position.x}px`;
    this.sprite.style.top = `${this.position.y}px`;
  }

  /**
   * @param {number} degrees
   */
  setRotation(degrees) {
    this.rotation = degrees;
    this.sprite.style.rotate = `${this.rotation}deg`;
  }

  /**
   * @param {Vector2} size
   */
  setSize(size) {
    this.size = size;
    this.sprite.style.width = `${size.x}px`;
    this.sprite.style.height = `${size.y}px`;
  }

  /**
   * @param {Vector2} force
   */
  impulse(force) {
    this.position.add(force);
    this.setPosition(this.position);
  }

  /**
   * @description This method is called every frame
   */
  tick() {
    // Override this method
  }

  constructor() {
    this.setPosition(this.position);
    this.setRotation(this.rotate);
    this.setSize(this.size);
    this.sprite.style.transformOrigin = "center";
    this.sprite.style.translate = "-50% -50%";
    this.parent.appendChild(this.sprite);
    setInterval(() => this.tick(), engine.deltaTime * 1000);
  }
}
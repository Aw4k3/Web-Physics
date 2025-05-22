import engine from "../components/Engine.js";
import Vector2 from "../components/Vector2.js";

export default class Actor {
  position = new Vector2();
  rotation = 0;
  size = new Vector2(64, 64);
  sprite = document.createElement("div");
  parent = viewport;
  children = [];

  constructor() {
    this.setPosition(this.position);
    this.setRotation(this.rotation);
    this.setSize(this.size);
    this.sprite.style.backgroundColor = "#FFF";
    this.sprite.style.transformOrigin = "center";
    this.sprite.style.translate = "-50% -50%";
    this.parent.appendChild(this.sprite);
    setInterval(() => this.tick(), engine.deltaTime * 1000);
  }

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
   *
   * @param {string} url
   */
  setSprite(url) {
    this.sprite.style.background = `url("${url}")`;
    this.sprite.style.backgroundSize = "contain";
    this.sprite.style.backgroundRepeat = "no-repeat";
  }
  getBoundingBox() {
    return {
      x: this.position.x - this.size.x / 2,
      y: this.position.y - this.size.y / 2,
      width: this.size.x,
      height: this.size.y,
    };
  }

  /**
   * @description This method is called every frame
   */
  tick() {
    // Override this method
  }

  destroy() {
    this.parent.removeChild(this.sprite);
  }
}

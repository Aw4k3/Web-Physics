import Actor from "../lib/Actor.js";
import Vector2 from "../lib/Vector2.js";

export default class Projectile extends Actor {
  direction = new Vector2();
  projectileSpeed = 10;

  constructor() {
    super();
    this.setSize(Vector2.multiply(Vector2.vector2(27, 11), Vector2.vector2(2, 2)));
    this.setSprite("./assets/BlueLaser.png");
  }

  tick() {
    this.impulse(Vector2.vector2(this.direction.normalisedX * this.projectileSpeed, this.direction.normalisedY * this.projectileSpeed));
  }
}

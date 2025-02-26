import Actor from "../lib/Actor.js";
import Vector2 from "../lib/Vector2.js";

export default class Projectile extends Actor {
  direction = new Vector2();
  movementSpeed = 5;

  constructor() {
    super();
    this.setSize(Vector2.vector2(16, 40));
  }

  tick() {
    this.impulse(Vector2.vector2(this.direction.normalisedX * this.movementSpeed, this.direction.normalisedY * 5));
  }
}

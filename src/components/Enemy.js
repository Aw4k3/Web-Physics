import Actor from "../lib/Actor.js";
import Vector2 from "../lib/Vector2.js";

export default class Enemy extends Actor {
  /** @type {Actor} */
  target = null;
  movementSpeed = 3;
  direction = new Vector2();
  targetDistance = new Vector2();

  constructor() {
    super();
    this.setSprite("./assets/Savage.png");
  }

  tick() {
    this.targetDistance.setVector(this.target.position.x - this.position.x, this.target.position.y - this.position.y);
    if (this.target !== null)
      this.impulse(
        Vector2.vector2(
          this.targetDistance.normalisedX * this.movementSpeed,
          this.targetDistance.normalisedY * this.movementSpeed
        )
      );
  }
}

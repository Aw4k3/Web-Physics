import Actor from "../components/Actor.js";
import HitBox from "../components/HitBox.js";
import Vector2 from "../components/Vector2.js";

export default class Enemy extends Actor {
  /** @type {Actor} */
  target = null;
  movementSpeed = 3;
  direction = new Vector2();
  targetDistance = new Vector2();
  hitBox = new HitBox(Vector2.vector2(0, 0), Vector2.vector2(this.size.x, this.size.y));
  boundingBox = this.getBoundingBox();

  constructor() {
    super();
    this.setSprite("./assets/textures/Savage.png");
    this.hitBox.showHitBox();
  }

  tick() {
    // Track player
    this.targetDistance.setVector(this.target.position.x - this.position.x, this.target.position.y - this.position.y);
    if (this.target !== null)
      this.impulse(
        Vector2.vector2(
          this.targetDistance.normalisedX * this.movementSpeed,
          this.targetDistance.normalisedY * this.movementSpeed
        )
      );

    // Update hitbox position
    this.boundingBox = this.getBoundingBox();
    this.hitBox.start = Vector2.vector2(this.boundingBox.x, this.boundingBox.y);
    this.hitBox.end = Vector2.vector2(
      this.boundingBox.x + this.boundingBox.width,
      this.boundingBox.y + this.boundingBox.height
    );

    // Check for collision with player
    if (this.hitBox.isOverlapped(this.target.hitBox)) {
      
    }
  }
}

import Actor from "../lib/Actor.js";
import HitBox from "../lib/HitBox.js";
import Vector2 from "../lib/Vector2.js";

export default class Projectile extends Actor {
  direction = new Vector2();
  projectileSpeed = 10;
  hitBox = new HitBox(Vector2.vector2(0, 0), Vector2.vector2(this.size.x, this.size.y));
  boundingBox = this.getBoundingBox();

  constructor() {
    super();
    this.setSize(Vector2.multiply(Vector2.vector2(27, 11), Vector2.vector2(2, 2)));
    this.setSprite("./assets/BlueLaser.png");
    this.hitBox.showHitBox();
  }

  tick() {
    this.impulse(
      Vector2.vector2(
        this.direction.normalisedX * this.projectileSpeed,
        this.direction.normalisedY * this.projectileSpeed
      )
    );

    // Update hitbox position
    this.boundingBox = this.getBoundingBox();
    this.hitBox.start = Vector2.vector2(this.boundingBox.x, this.boundingBox.y);
    this.hitBox.end = Vector2.vector2(
      this.boundingBox.x + this.boundingBox.width,
      this.boundingBox.y + this.boundingBox.height
    );
  }
}

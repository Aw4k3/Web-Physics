import Actor from "../lib/Actor.js";
import engine from "../lib/Engine.js";
import Vector2 from "../lib/Vector2.js";
import Projectile from "./Projectile.js";

export default class Rocket extends Actor {
  direction = new Vector2();
  movementSpeed = 5;
  /** @type {Projectile[]} */
  bullets = [];
  firingCooldown = 0.25;
  isFiringOnCooldown = false;

  constructor() {
    super();
    this.setSprite("./assets/SpaceShip.png");
    this.setSize(new Vector2(100, 100));
    this.setPosition(new Vector2(engine.viewport.clientWidth / 2, engine.viewport.clientHeight / 2));
  }

  tick() {
    // Rocket direction
    this.direction.setVector(engine.cursorPosition.x - this.position.x, engine.cursorPosition.y - this.position.y);
    this.setRotation(this.direction.getRotation() + 90);

    // Movement
    if (engine.keysPressed.includes("KeyW")) {
      this.impulse(Vector2.vector2(0, -this.movementSpeed));
    }

    if (engine.keysPressed.includes("KeyS")) {
      this.impulse(Vector2.vector2(0, this.movementSpeed));
    }

    if (engine.keysPressed.includes("KeyA")) {
      this.impulse(Vector2.vector2(-this.movementSpeed, 0));
    }

    if (engine.keysPressed.includes("KeyD")) {
      this.impulse(Vector2.vector2(this.movementSpeed, 0));
    }

    // Firing
    if (engine.isMouseDown) {
      if (!this.isFiringOnCooldown) {
        let projectile = new Projectile();
        projectile.direction.setVector(this.direction.x, this.direction.y);
        projectile.setPosition(this.position);
        projectile.setRotation(this.direction.getRotation());
        this.bullets.push(projectile);
        this.isFiringOnCooldown = true;
        setTimeout(() => {
          this.bullets[0].destroy();
          this.bullets = this.bullets.slice(1);
        }, 3000);
        setTimeout(() => {
          this.isFiringOnCooldown = false;
        }, this.firingCooldown * 500);
      }
    }
  }
}

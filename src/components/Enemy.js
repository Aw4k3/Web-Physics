import Actor from "../lib/Actor.js";

export default class Enemy extends Actor {
  gameObjects = [];
  /** @type {Actor} */
  target = null;
  movementSpeed = 5;

  constructor() {
    super();
    this.setSprite("./assets/Savage.png");
  }

  tick() {

  }
}

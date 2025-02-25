const viewport = document.getElementById("viewport");

class Vector2 {
  x = 0;
  y = 0;
  normalisedX = 0;
  normalisedY = 0;

  /**
   * @constructor
   * @param {number} x
   * @param {number} y
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.normalise();
  }

  setVector(x, y) {
    this.x = x;
    this.y = y;
    this.normalise();
  }

  getRotation() {
    this.normalise();
    return (Math.atan2(this.normalisedY, this.normalisedX) * 180) / Math.PI;
  }

  normalise() {
    let length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    this.normalisedX = this.x / length;
    this.normalisedY = this.y / length;
  }
}

class Actor {
  position = new Vector2();
  rotation = 0;
  size = new Vector2(64, 64);
  sprite = document.createElement("div");
  parent = viewport;

  rotate(deg) {
    this.rotation += deg;
    this.sprite.style.rotate = `${this.rotation}deg`;
  }

  /**
   *
   * @param {Vector2} position
   */
  setPosition(position) {
    this.position = position;
    this.sprite.style.left = `${position.x}px`;
    this.sprite.style.top = `${position.y}px`;
  }

  /**
   *
   * @param {number} degrees
   */
  setRotation(degrees) {
    this.rotation = degrees;
    this.sprite.style.rotate = `${this.rotation}deg`;
  }

  /**
   *
   * @param {Vector2} size
   */
  setSize(size) {
    this.size = size;
    this.sprite.style.width = `${size.x}px`;
    this.sprite.style.height = `${size.y}px`;
  }

  constructor() {
    this.setPosition(this.position);
    this.setRotation(this.rotate);
    this.setSize(this.size);

    this.sprite.style.transformOrigin = "center";
    this.sprite.style.translate = "-50% -50%";
    this.sprite.style.background = "#FFF 0% 0% / contain no-repeat";
    this.sprite.style.backgroundSize = "contain";
    this.sprite.style.backgroundRepeat = "no-repeat";
    this.parent.appendChild(this.sprite);
  }
}

const deltaTime = 1 / 60;
let keysPressed = [];
const mouse = new Vector2();
const actor = new Actor();
actor.setPosition(new Vector2(viewport.clientWidth / 2, viewport.clientHeight / 2));
actor.setSize(new Vector2(128, 128));
actor.sprite.style.background = `url("./assets/SpaceShip.png")`;
actor.sprite.style.backgroundSize = "contain";
actor.sprite.style.backgroundRepeat = "no-repeat";
setInterval(() => tick(), deltaTime * 1000);

function tick() {
  let angle = new Vector2(mouse.x - actor.position.x, mouse.y - actor.position.y).getRotation() + 90;
  actor.setRotation(angle);
}

viewport.addEventListener("mousemove", (e) => {
  mouse.setVector(e.x, e.y);
});

viewport.addEventListener("keydown", (e) => {
  keysPressed.push(e.code);
});

viewport.addEventListener("keyup", (e) => {
  
})
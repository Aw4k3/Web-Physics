import Vector2 from "./Vector2.js";

class Engine {
  viewport = document.getElementById("viewport");
  /** @property Frame time in seconds */
  deltaTime = 1 / 60;
  keysPressed = [];
  isMouseDown = false;
  cursorPosition = Vector2.vector2(0, 0);
  resolution = Vector2.vector2(0, 0);

  constructor() {
    this.resolution.x = this.viewport.clientWidth;
    this.resolution.y = this.viewport.clientHeight;

    this.viewport.addEventListener("mousemove", (e) => {
      this.cursorPosition.x = e.x;
      this.cursorPosition.y = e.y;
    });

    this.viewport.addEventListener("keydown", (e) => {
      if (!this.keysPressed.includes(e.code)) {
        this.keysPressed.push(e.code);
      }
    });

    this.viewport.addEventListener("keyup", (e) => {
      this.keysPressed = this.keysPressed.filter((key) => key !== e.code);
    });

    this.viewport.addEventListener("mousedown", () => {
      this.isMouseDown = true;
    });

    this.viewport.addEventListener("mouseup", () => {
      this.isMouseDown = false;
    });

    this.viewport.style.background = `url("./assets/Background1.jpg")`;
    // this.viewport.style.backgroundSize = "fill";
    // this.viewport.style.backgroundRepeat = "no-repeat";

    setInterval(() => this.tick(), this.deltaTime * 1000);
  }

  tick() {
    
  }
}

const engine = new Engine();
export default engine;

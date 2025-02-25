import Vector2 from "./Vector2.js";

class Engine {
  viewport = document.getElementById("viewport");
  /** @property Frame time in seconds */
  deltaTime = 1 / 60;
  keysPressed = [];
  isMouseDown = false;
  cursorPosition = new Vector2();

  constructor() {
    this.viewport.addEventListener("mousemove", (e) => {
      this.cursorPosition.setVector(e.x, e.y);
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
  }
}

const engine = new Engine();
export default engine;

import Enemy from "./assets/Enemy.js";
import Rocket from "./assets/Rocket.js";

const enemies = [];

const player = new Rocket();

let enemy = new Enemy();
enemy.target = player;
enemies.push();
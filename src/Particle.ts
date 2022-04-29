import { random } from "./Utility";
import { Coordinate } from "./interfaces/Coordinate";
import { ParticleArguments } from "./interfaces/ParticleArguments";

class Particle {
  availableSizes = [15, 20, 25, 35, 45];
  size = this.availableSizes[random(0, this.availableSizes.length - 1)];

  content: string;
  element?: HTMLElement;

  y: number;
  x: number;
  direction: number;
  angle: number;
  spinSpeed: number;
  velocity: Coordinate;

  constructor({
    y,
    x,
    direction,
    angle,
    spinSpeed,
    velocity,
    content,
  }: ParticleArguments) {
    this.content = content;

    this.y = y - this.size / 2;
    this.x = x - this.size / 2;
    this.direction = direction;
    this.angle = angle;
    this.spinSpeed = spinSpeed;
    this.velocity = velocity;
  }
  generate() {
    const element = document.createElement("span");
    element.classList.add("particle");
    element.innerHTML = this.content;

    this.element = element;

    return this.element;
  }
  update() {
    this.y -= this.velocity.y;
    this.x -= this.velocity.x * this.direction;

    this.angle += this.spinSpeed;
    this.velocity.y = Math.min(this.size, this.velocity.y - 1);

    this.element!.style.fontSize = `${this.size}px`;
    this.element!.style.top = `${this.y}px`;
    this.element!.style.left = `${this.x}px`;
    this.element!.style.transform = `rotate(${this.angle}deg)`;
  }
}

export default Particle;

// class Particle {
//   constructor({ element, y, x, direction, velocity, angle, spinSpeed }) {
//     this.availableSizes = [15, 20, 25, 35, 45];

//     this.container = container;
//     this.size =
//       this.availableSizes[
//         Math.floor(Math.random() * this.availableSizes.length)
//       ];

//     this.y = y - this.size / 2;
//     this.x = x - this.size / 2;
//     this.direction = direction;
//     this.velocity = velocity;
//     this.angle = angle;
//     this.spinSpeed = spinSpeed;

//     this.element = element;
//   }
//   update() {
//     this.y -= this.velocity.y;
//     this.x -= this.velocity.x * this.direction;

//     this.angle += this.spinSpeed;
//     this.velocity.y = Math.min(this.size, this.velocity.y - 1);

//     this.element.style.fontSize = `${this.size}px`;
//     this.element.style.top = `${this.y}px`;
//     this.element.style.left = `${this.x}px`;
//     this.element.style.transform = `rotate(${this.angle}deg)`;
//   }
// }

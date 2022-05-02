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

  opacity: number;
  fadeOutAnimation: boolean;

  constructor({
    y,
    x,
    direction,
    angle,
    spinSpeed,
    velocity,
    content,
    fadeOutAnimation,
  }: ParticleArguments) {
    this.content = content;

    this.y = y - this.size / 2;
    this.x = x - this.size / 2;
    this.direction = direction;
    this.angle = angle;
    this.spinSpeed = spinSpeed;
    this.velocity = velocity;

    this.opacity = 1;
    this.fadeOutAnimation = fadeOutAnimation;
  }
  generate() {
    const element = document.createElement("span");
    element.style.position = "absolute";
    element.style.pointerEvents = "none";
    element.style.userSelect = "none";
    element.innerHTML = this.content;

    this.element = element;

    return this.element;
  }
  update() {
    const element = this.element!;

    this.y -= this.velocity.y;
    this.x -= this.velocity.x * this.direction;

    this.angle += this.spinSpeed;
    this.velocity.y = Math.min(this.size, this.velocity.y - 1);

    element.style.fontSize = `${this.size}px`;
    element.style.top = `${this.y}px`;
    element.style.left = `${this.x}px`;
    element.style.transform = `rotate(${this.angle}deg)`;

    if (this.fadeOutAnimation) {
      element.style.opacity = `${this.opacity * 100}`;
      this.opacity -= this.opacity * 0.1;
    }
  }
}

export default Particle;

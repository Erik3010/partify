import { PartifyOptions } from "./interfaces/PartifyOptions";
import { Coordinate } from "./interfaces/Coordinate";
import { EventHandler } from "./types/EventHandler";

import Particle from "./Particle";
import { debounce, random } from "./Utility";

class Partify {
  defaultOptions: PartifyOptions = {
    limit: 15,
    maxLimit: 100,
  };

  selector: string;
  content: string;
  options: PartifyOptions;
  particles: Particle[] = [];
  isAddParticle = false;
  coordinate?: Coordinate;
  eventCallback: EventHandler = {};

  container: HTMLElement;

  constructor(selector: string, content: string, options: PartifyOptions = {}) {
    this.selector = selector;
    this.content = content;

    this.container = document.querySelector(this.selector)!;

    this.options = Object.assign({}, this.defaultOptions, options);

    this.eventCallback = {
      mouseDown: this.mouseDownHandler.bind(this),
      mouseMove: this.mouseMoveHandler.bind(this),
      mouseUp: this.mouseUpHandler.bind(this),
    };
  }
  init() {
    console.log("🌟 Newtron initialized!");

    this.container.style.position = "relative";

    this.bindEventHandler();
    this.animate();
  }
  bindEventHandler() {
    this.container.addEventListener("mousedown", this.eventCallback.mouseDown);
    this.container.addEventListener("mousemove", this.eventCallback.mouseMove);
    this.container.addEventListener("mouseup", this.eventCallback.mouseUp);
  }
  mouseDownHandler() {
    this.isAddParticle = true;
  }
  mouseMoveHandler(event: MouseEvent) {
    const { offsetY: y, offsetX: x } = event;
    this.coordinate = { y, x };
  }
  mouseUpHandler() {
    this.isAddParticle = false;
  }
  generateParticles() {
    for (let i = 0; i < this.options.limit!; i++) {
      const particle = this.createParticle();
      this.container.appendChild(particle.generate());

      this.particles.push(particle);
    }
  }
  createParticle() {
    const { y, x } = this.coordinate!;
    const direction = Math.random() < 0.5 ? -1 : 1;

    return new Particle({
      y,
      x,
      direction,
      angle: random(0, 360),
      spinSpeed: random(0, 35) * direction,
      content: this.content,
      velocity: {
        y: random(0, 10),
        x: random(0, 25),
      },
    });
  }
  animate() {
    requestAnimationFrame(this.animate.bind(this));

    if (this.isAddParticle && this.particles.length < this.options.maxLimit!) {
      this.generateParticles();
    }

    this.particles.forEach((particle, index) => {
      if (particle.y >= this.container.clientHeight) {
        particle.element!.remove();
        this.particles.splice(index, 1);
      } else {
        particle.update();
      }
    });
  }
}

export default Partify;

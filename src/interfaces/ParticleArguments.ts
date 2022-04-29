import { Coordinate } from "./Coordinate";

export interface ParticleArguments {
  y: number;
  x: number;
  direction: number;
  angle: number;
  spinSpeed: number;
  velocity: Coordinate;
  content: string;
}

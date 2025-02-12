import { random } from './helpers.js';

type SparkleT = {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: string;
};

export const DEFAULT_COLOR = '#FFC700';

export function generateSparkle(sparkleColor = DEFAULT_COLOR) {
  return {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    color: sparkleColor,
    size: random(10, 20),
    style: `top: ${random(-20, 50) + '%'}; left: ${
      random(0, 90) + '%'
    }; pointer-events: none;`,
  } satisfies SparkleT;
}

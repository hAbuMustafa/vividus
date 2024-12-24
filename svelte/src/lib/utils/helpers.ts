export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function range(start: number, end = 0, step = 1) {
  let output = [];
  if (end === 0) {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
}

export function randomInterval(
  callback: Function,
  minDelay: number | null,
  maxDelay: number | null
) {
  let currentTimeoutId: number;
  let isEnabled = typeof minDelay === 'number' && typeof maxDelay === 'number';

  if (isEnabled) {
    function handleTick() {
      const nextTickAt = random(minDelay as number, maxDelay as number);
      currentTimeoutId = setTimeout(() => {
        callback();
        handleTick();
      }, nextTickAt);
    }

    handleTick();
  }

  function cancel() {
    clearTimeout(currentTimeoutId);
  }

  return cancel;
}

export const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const debounce = (callback: (...args: any[]) => any, timeout = 300) => {
  let interval: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

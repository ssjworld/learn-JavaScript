export const rotateLeft = (arr: Array<number>, rotation: number) => {
  const effectiveRotation: number = rotation % arr.length;

  if (effectiveRotation) {
    return [...arr.slice(effectiveRotation, arr.length).concat(arr.slice(0, effectiveRotation))];
  } else {
    return [...arr];
  }
};

// This function will receive the position of the cell and return a string as a grid area

export function createGridArea(
  position: { y: number; x: number },
  size: number,
) {
  const gridArea = `${position.y} / ${position.x} / ${position.y + size} / ${
    position.x + 1
  }`
  return gridArea
}

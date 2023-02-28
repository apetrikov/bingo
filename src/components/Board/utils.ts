export type Cell = {
  id: number,
  text: string,
  clicked: boolean,
  central: boolean,
  winner: boolean,
}

export function generateGrid(array: string[]): Cell[] {
  const centralIndex = Math.floor(array.length / 2)
  return array.map(((text, index) => ({
    id: index,
    text,
    clicked: index === centralIndex,
    central: index === centralIndex,
    winner: false
  })))
}
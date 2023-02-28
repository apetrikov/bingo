import {defaultGridColumns, defaultCentralTileText, defaultPhrases} from "./const";

type GridProps = {
  columns?: number
  phrases?: string [],
  centralTileText?: string,
}
export function generateArray ({columns = defaultGridColumns, phrases = defaultPhrases, centralTileText = defaultCentralTileText}: GridProps): string[] {
  const size = listLength({ phrasesLength: phrases.length, columns })
  const randomList = randomizePhrases({phrases, size})
  if (randomList.length === 0) return []
  const bingoList = addCentralTile({phrases: randomList, centralTileText})
  return bingoList
}

export function listLength({ phrasesLength, columns }: { phrasesLength: number, columns: number}): number {
  const gridSize = columns * columns
  if (phrasesLength + 1 < gridSize) return 0
  if (phrasesLength + 1 ===  gridSize) return phrasesLength
  return gridSize - 1
}

export function addCentralTile({phrases, centralTileText}: {phrases: string[], centralTileText: string}): string[] {
  if (phrases.length % 2 === 1) return [] // TODO show exception for the user

  const centralIndex = phrases.length / 2
  return [...phrases.slice(0, centralIndex),
          centralTileText,
          ...phrases.slice(centralIndex)]
}

export function randomizePhrases({phrases, size}: {phrases: string[], size: number}): string[] {
  if (phrases.length < size) return []
  let seeds = [...phrases]
  const randomized: string[] = Array.from({length: size}, (el, i) => {
    const randomIndex = Math.floor(Math.random() * seeds.length)
    const element = seeds[randomIndex]
    seeds.splice(randomIndex, 1)
    return element
  })
  return randomized
}
import {defaultGridColumns, defaultCentralTileText} from "./const";
import {defaultPhrases} from "./phrases";

type GridProps = {
    columns?: number
    phrases?: Phrase[],
    centralTileText?: string,
}

export function generateArray({
                                  columns = defaultGridColumns,
                                  phrases = defaultPhrases,
                                  centralTileText = defaultCentralTileText
                              }: GridProps): Phrase[] {
    const size = listLength({phrasesLength: phrases.length, columns})
    const randomList = randomizePhrases({phrases, size})
    if (randomList.length === 0) return []
    const bingoList = addCentralTile({phrases: randomList, centralTileText})
    return bingoList
}

export function listLength({phrasesLength, columns}: { phrasesLength: number, columns: number }): number {
    const gridSize = columns * columns
    if (phrasesLength + 1 < gridSize) return 0
    if (phrasesLength + 1 === gridSize) return phrasesLength
    return gridSize - 1
}

export function addCentralTile({phrases, centralTileText}: { phrases: Phrase[], centralTileText: string }): Phrase[] {
    if (phrases.length % 2 === 1) return []

    const centralIndex = phrases.length / 2
    return [...phrases.slice(0, centralIndex),
            { id: -1, text: centralTileText},
        ...phrases.slice(centralIndex)]
}

export function randomizePhrases({phrases, size}: { phrases: Phrase[], size: number }): Phrase[] {
    if (phrases.length < size) return []
    let seeds = [...phrases]
    const randomized: Phrase[] = Array.from({length: size}, () => {
        const randomIndex = Math.floor(Math.random() * seeds.length)
        const element = seeds[randomIndex]
        seeds.splice(randomIndex, 1)
        return element
    })
    return randomized
}
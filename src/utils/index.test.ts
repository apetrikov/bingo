import {generateGrid, listLength, addCentralTile, randomizePhrases} from './index'


describe('addCentralTile', () => {
  it('for ODD return []', () => {
    const data = {
      phrases: ['1'],
      centralTileText: 'ANY'
    }
    expect(addCentralTile(data)).toStrictEqual([]);
  });

  it('for EVEN adds central element', () => {
    const data = {
      phrases: ['1', '2'],
      centralTileText: 'ANY'
    }
    expect(addCentralTile(data)).toStrictEqual(['1', data.centralTileText, '2']);
  });
})

describe('listLength', () => {
  it('returns 0 if bingo doesn\'t fit in grid size', () => {
    const data = {
      phrasesLength: 6,
      columns: 3
    }
    expect(listLength(data)).toBe(0)
  });

  it('returns phrasesLength if bingo fits in grid size', () => {
    const data = {
      phrasesLength: 8,
      columns: 3
    }
    expect(listLength(data)).toBe(data.phrasesLength)
  });

  it('returns grid size if bingo more than grid size', () => {
    const data = {
      phrasesLength: 30,
      columns: 4
    }
    expect(listLength(data)).toBe(15)
  });
})

describe('randomizePhrases', () => {
  it('returns [] if phrases are less than grid size', () => {
    const data = {
      phrases: [],
      size: 2
    }
    expect(randomizePhrases(data)).toStrictEqual([]);
  });

  it('returns array if phrases are > to grid size', () => {
    const data = {
      phrases: ['1', '1', '3', '4'],
      size: 3
    }

    const result = randomizePhrases(data)
    expect(result.length).toEqual(data.size);

    const testPhrases = [...data.phrases]
    const uniqueElementsCounterInPhrases = result.reduce((acc, curr) => {
      const index = testPhrases.findIndex(el => el === curr)
      if (index === -1) return acc
      testPhrases.splice(index, 1)
      return acc + 1
    }, 0)

    expect(uniqueElementsCounterInPhrases).toBe(data.size)
  });
})

describe('generateGrid', () => {
  it('returns 0 if no elements', () => {
    const data = {
      columns: 4,
      phrases: [],
      centralTileText: 'BINGO',
    }
    expect(generateGrid(data)).toStrictEqual([])
  })

  it('returns 0 if phrases length less than grid size', () => {
    const data = {
      columns: 4,
      phrases: ['1', '2', '3'],
      centralTileText: 'BINGO',
    }
    expect(generateGrid(data)).toStrictEqual([])
  })

  it('returns grid ', () => {
    const data = {
      columns: 3,
      phrases: ['1', '2', '3', '4', '5', '6', '7', '8'],
      centralTileText: 'BINGO',
    }
    expect(new Set(generateGrid(data))).toStrictEqual(new Set([...data.phrases, data.centralTileText]))
  })
})



export {}
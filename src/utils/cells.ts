export function generateGrid(array: Phrase[]): Cell[] {
    const centralIndex = Math.floor(array.length / 2)
    return array.map((({text, id}, index) => ({
        id,
        text,
        clicked: index === centralIndex,
        central: index === centralIndex,
        winner: false
    })))
}

// The grid is always a square!
export function getWinnerCells(updatedIndex: number, grid: Cell[], cols = 5): Cell[] {
    if (updatedIndex < 0) return []
    if (updatedIndex > grid.length - 1) return []
    if (grid.length < cols * cols) return []

    const cellsToCheck: Record<string, Cell[]> = {
        row: [],
        columns: [],
        diagonal1: [],
        diagonal2: []
    }

    const firstRowIndex = Math.floor(updatedIndex / cols) * cols
    cellsToCheck.row = grid.slice(firstRowIndex, firstRowIndex + cols)

    const firstColIndex = updatedIndex % cols
    for (let i = 0; i < cols; i++) {
        const element = grid[firstColIndex + i * cols]
        cellsToCheck.columns.push(element)
    }

    for (let i = 0; i < cols; i++) {
        const element1 = grid[i + i * cols]
        cellsToCheck.diagonal1.push(element1)

        const element2 = grid[cols - 1 + i * (cols - 1)]
        cellsToCheck.diagonal2.push(element2)
    }

    const checkIndexes = (indexes: Cell[]): boolean => indexes.every(i => i.clicked)

    return Object
        .values(cellsToCheck)
        .filter(checkIndexes)
        .flat()
}
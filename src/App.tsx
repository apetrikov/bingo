import React, {useCallback, useState} from 'react';
import Confetti from "react-confetti";
import './styles/global.css';
import styles from './App.module.css'
import './App.module.css';
import {Board} from './components'

import {generateArray} from "./utils";
import {generateGrid, getWinnerCells} from "./utils/cells";
import {useWindowSize} from "react-use";

export type Cell = {
    id: number,
    text: string,
    clicked: boolean,
    central: boolean,
    winner: boolean,
}

export function App() {
    const {width, height} = useWindowSize()

    // imitate an api with this upper-state
    const [grid1, setGrid1] = useState<Cell[]>(generateGrid(generateArray({})))
    const [grid2, setGrid2] = useState<Cell[]>(generateGrid(generateArray({})))
    const [grid3, setGrid3] = useState<Cell[]>(generateGrid(generateArray({})))
    const [counter, setCounter] = useState<number>(0)
    const [confetti, setConfetti] = useState({run: false, recycle: false})

    const handleClick = useCallback((cellId: number) => {
        const winners1 = updateState(grid1, cellId, setGrid1)
        const winners2 = updateState(grid2, cellId, setGrid2)
        const winners3 = updateState(grid3, cellId, setGrid3)

        const totalWinners = winners1 + winners2 + winners3

        if (totalWinners !== counter) {
            console.log('BINGO')
            setConfetti({run: true, recycle: true})
            setCounter(totalWinners)
            setTimeout(() => setConfetti({run: true, recycle: false}), 1000)
        }
    }, [])

    const updateState = (grid: Cell[], cellId: number, cb: (cells: Cell[]) => void): number => {
        const newState: Cell[] = calcClickedState(cellId, grid)
        const winners: Cell[] = calcWinnerCells(cellId, newState)
        cb(calcState(newState, winners))

        return winners.length
    }

    const calcClickedState = (clickedCellId: number, grid: Cell[]): Cell[] => {
        const newState = [...grid]
        const index = newState.findIndex(cell => cell.id === clickedCellId)
        if (index === -1) return grid
        newState[index].clicked = true

        return newState
    }

    const calcWinnerCells = (clickedCellId: number, grid: Cell[]): Cell[] => {
        const newState = [...grid]
        const index = newState.findIndex(cell => cell.id === clickedCellId)
        if (index === -1) return grid

        return getWinnerCells(index, newState)
    }

    const calcState = (grid: Cell[], winnerCells: Cell[]): Cell[] => {
        if (!winnerCells.length) return grid
        const newState = [...grid]

        winnerCells.forEach(({id}) => {
            const index = newState.findIndex(cell => cell.id === id)
            newState[index].winner = true
        })

        return newState
    }

    return (
        <div className={styles.app}>
            <Confetti
                width={width}
                height={height}
                run={confetti.run}
                recycle={confetti.recycle}
            />
            <Board grid={grid1}
                   playerName={'Player 1'}
                   cb={handleClick}
            />
            <Board grid={grid2}
                   playerName={'Player 2'}
                   cb={handleClick}
            />
            <Board grid={grid3}
                   playerName={'Player 3'}
                   cb={handleClick}
            />
        </div>
    );
}

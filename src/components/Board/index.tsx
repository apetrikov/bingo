import React, {useState, useEffect} from 'react';
import styles from './Board.module.css';
import {Tile} from './Tile'
import {generateGrid, getWinnerCells} from "./utils";

type Props = {
    phraseArray: Phrase[],
    clickedCell?: Cell,
    cols?: number,
    cb?: (cell: Cell) => void
}

export function Board({phraseArray, cols, clickedCell, cb}: Props) {
    const [grid, setGrid] = useState(generateGrid(phraseArray))

    const updateState = (el: Cell) => {
        const newState = [...grid]
        const index = newState.findIndex(cell => cell.id === el.id)
        if (index === -1) return
        newState[index].clicked = true

        const winnerCells: Cell[] = getWinnerCells(index, newState, cols)
        if (winnerCells.length) winnerCells.forEach(({id}) => {
            const index = newState.findIndex(cell => cell.id === id)
            newState[index].winner = true
        })
        setGrid(newState)
    }

    const handleClick = (el: Cell) => (): void => {
        updateState(el)

        // TODO Game should be stopped, we detect the winner among all the cards
        cb?.(el)
    }

    useEffect(() => {
        clickedCell && updateState(clickedCell)
    }, [clickedCell]);

    return (
        <div className={styles.board}>
            {grid.map(el => <Tile key={el.id}
                                  text={el.text}
                                  clicked={el.clicked}
                                  cb={handleClick(el)}
                                  central={el.central}
                                  winner={el.winner}
            />)}
        </div>
    );
}
import React, {useState} from 'react';
import styles from './Board.module.css';
import {Tile} from './Tile'
import {generateGrid, getWinnerCells} from "./utils";

type Props = {
    phraseArray: Phrase[],
    cols?: number
}

export function Board({phraseArray, cols}: Props) {
    const [grid, setGrid] = useState(generateGrid(phraseArray))
    const handleClick = (el: Cell) => (): void => {
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

        // TODO call an api. Game should be stopped, we detect the winner among all the cards
    }

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
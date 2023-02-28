import React, {useState} from 'react';
import styles from './Board.module.css';
import {Tile} from './Tile'
import {generateGrid, Cell, getWinnerCells} from "./utils";

type Props = {
    phraseArray: string[],
    cols?: number
}

export function Board({phraseArray, cols}: Props) {
    const [grid, setGrid] = useState(generateGrid(phraseArray))
    const handleClick = (el: Cell) => () => {
        const newState = [...grid]
        newState[el.id].clicked = true
        // TODO check winner
      const winnerCells: Cell[] = getWinnerCells(el.id, newState, cols)
        if (winnerCells.length) winnerCells.forEach(i => newState[i.id].winner = true)
        setGrid(newState)
//        console.log(el) //  TODO call api handler
    }

    return (
        <div className={styles.board}>
            {grid.map((el, i) => <Tile key={el.id}
                                       text={el.text}
                                       clicked={el.clicked}
                                       cb={handleClick(el)}
                                       central={el.central}
                                       winner={el.winner}
            />)}
        </div>
    );
}
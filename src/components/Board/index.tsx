import React, {useState} from 'react';
import styles from './Board.module.css';
import {Tile} from './Tile'
import {generateGrid, Cell} from "./utils";

type Props = {
    phraseArray: string[]
}

export function Board({phraseArray}: Props) {
  const [grid, setGrid] = useState(generateGrid(phraseArray))
    const handleClick = (el: Cell) => () => {
        const newState = [...grid]
        newState[el.id].clicked = true
        // TODO check winner
        setGrid(newState)
        console.log(el) //  TODO call api handler
    }

    return (
        <div className={styles.board}>
          {grid.map((el, i) => <Tile key={el.id} text={el.text} clicked={el.clicked} cb={handleClick(el)}
                                       central={el.central}/>)}
        </div>
    );
}

import React from 'react';
import styles from './Board.module.css';
import {Tile} from './Tile'

type Props = {
    grid: Cell[]
    playerName: string,
    cb: (id: number) => void
}

export function Board({grid, playerName, cb}: Props) {
    return (
        <>
            <h4>{playerName}</h4>
            <div className={styles.board}>
                {grid.map(el => <Tile key={el.id}
                                      id={el.id}
                                      text={el.text}
                                      clicked={el.clicked}
                                      cb={cb}
                                      central={el.central}
                                      winner={el.winner}
                />)}
            </div>
        </>
    );
}
import React, {useCallback, useState} from 'react';
import './styles/global.css';
import styles from './App.module.css'
import './App.module.css';
import {Board} from './components'

import {generateArray} from "./utils";

export type Cell = {
    id: number,
    text: string,
    clicked: boolean,
    central: boolean,
    winner: boolean,
}

export function App() {

    // imitate an api with this upper-state
    let [clickedCell, setClickedSell] = useState<Cell | undefined>(undefined)
    const handleClick = useCallback((cell: Cell) => {
        setClickedSell(cell)
    }, [])

    return (
        <div className={styles.app}>
            {['Player 1', 'Player 2', 'Player 3'].map(name => <Board phraseArray={generateArray({})}
                                                                     playerName={name}
                                                                     clickedCell={clickedCell}
                                                                     cb={handleClick}/>)}
        </div>
    );
}

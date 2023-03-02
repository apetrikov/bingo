import React, {useCallback, useState} from 'react';
import './styles/global.css';
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
  },[])

    return (
        <div className="app">
          <Board phraseArray={generateArray({})} clickedCell={clickedCell} cb={handleClick}/>
          <Board phraseArray={generateArray({})} clickedCell={clickedCell} cb={handleClick}/>
          <Board phraseArray={generateArray({})} clickedCell={clickedCell} cb={handleClick}/>
        </div>
    );
}

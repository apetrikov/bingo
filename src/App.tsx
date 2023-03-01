import React from 'react';
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
  // array of elements with unique id's
  // get subsets
  // pass subsets
  // after each click update subsets
    return (
        <div className="app">
          <Board phraseArray={generateArray({})}/>
          <Board phraseArray={generateArray({})}/>
          <Board phraseArray={generateArray({})}/>
        </div>
    );
}

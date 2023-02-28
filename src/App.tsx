import React from 'react';
import './styles/global.css';
import './App.module.css';
import {Board} from './components'

import {generateArray} from "./utils";

export function App() {
    return (
        <div className="app">
          <Board phraseArray={generateArray({})}/>
        </div>
    );
}

import React from 'react';
import './styles/global.css';
import './App.module.css';
import {Board} from './components'

import {generateGrid} from "./utils";

export function App() {
    return (
        <div className="app">
            <Board grid={generateGrid({})}/>
        </div>
    );
}

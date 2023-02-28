import React from 'react';
import logo from './logo.svg';
import './styles/global.css';
import './App.module.css';
import { Board } from './components'

export function App() {
  return (
    <div className="app">
      <Board />
    </div>
  );
}

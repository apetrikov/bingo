import React from 'react';
import styles from './Board.module.css';
import { Tile } from './Tile'

export function Board() {
  const generateGrid = (): string[] => {
    const size = 25
    const elements = []
    for (let i = 0; i < size; i++) {
      elements.push(i.toString())
    }
    elements[Math.floor(size / 2)] = 'CENTER'

    return elements
  }

  return (
          <div className={styles.board}>
        {generateGrid().map(el => <Tile key={el} text={el} cb={() => console.log(el)}/>)}
      </div>
  );
}

import React from 'react';
import styles from './Board.module.css';
import { Tile } from './Tile'

type Props = {
  grid: string[]
}

export function Board({ grid }: Props) {
  return (
          <div className={styles.board}>
        {grid.map(el => <Tile key={el} text={el} cb={() => console.log(el)}/>)}
      </div>
  );
}

import React from 'react';
import styles from './Tile.module.css'

type Props = {
  text: string,
  id: number;
  clicked?: boolean,
  central?: boolean,
  winner?: boolean,
  cb?: (id: number) => void
}

export function Tile({text, clicked, central, winner, cb, id}: Props) {
  const handleClick = () => {
    if (clicked) return
    cb?.(id)
  }
  let className = styles.tile
  if (clicked) className += ' ' + styles.clicked
  if (central) className += ' ' + styles.central
  if (winner) className += ' ' + styles.winner

  return (
          <div className={className} onClick={handleClick}>{text}</div>
  )
}
import React from 'react';
import styles from './Tile.module.css'

type Props = {
  text: string,
  clicked?: boolean,
  central?: boolean,
  winner?: boolean,
  cb?: () => void
}

export function Tile({text, clicked, central, winner,  cb}: Props) {
  const handleClick = () => {
    if (clicked) return
    cb?.()
  }
  let className = styles.tile
  if (clicked) className += ' ' + styles.clicked
  if (central) className += ' ' + styles.central
  if (winner) className += ' ' + styles.winner

  return (
          <div className={className} onClick={handleClick}>{text}</div>
  )
}
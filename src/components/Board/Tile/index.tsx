import React from 'react';
import styles from './Tile.module.css'

type Props = {
  text: string,
  cb?: () => void
}

export function Tile({text, cb}: Props) {
  return (
          <div className={styles.tile} onClick={cb}>{text}</div>
  )
}
import React from 'react'
import { DefaultButtonType } from './DefaultButtonType'

export const DefaultButton = ({
  styles,
  onClick,
  children,
  style,
}: DefaultButtonType) => {
  return (
    <button className={styles} onClick={onClick} style={style}>
      {children}
    </button>
  )
}

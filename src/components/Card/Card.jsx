import React from 'react'
import BtnCon from '../Ui/BtnCon'
import s from './Card.module.sass'

export default function Card({text, color}) {
    const style = {
        backgroundColor: color
    }
  return (
    <div className={s.card} style={style}>
        <p>
            {text}
        </p>
        <BtnCon>Подробнее</BtnCon>
    </div>
  )
}
 
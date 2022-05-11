import React from 'react'
import s from './BtnCon.module.sass'

export default function BtnCon({children}) {
  return (
    <div className={s.btn_con}>{children}</div>
  )
}
import React from 'react'
import s from './BtnInfo.module.sass'

export default function BtnInfo({children}) {
  return (
    <div className={s.btn_info}>{children}</div>
  )
}

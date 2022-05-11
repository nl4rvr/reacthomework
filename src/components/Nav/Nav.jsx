import React from 'react'
import BtnCon from '../Ui/BtnCon'
import BtnInfo from '../Ui/BtnInfo'
import logo from '../../media/logo.png'
import s from './Nav.module.sass'

export default function Nav() {
  return (
    <div className={s.nav}>
        <img src={logo} alt="logo" />
        <div className={s.bar}>
            <BtnInfo>О нас</BtnInfo>
            <BtnInfo>Услуги</BtnInfo>
            <BtnInfo>Аренда</BtnInfo>
        </div>
        <BtnCon>Связаться</BtnCon>
    </div>
  )
}

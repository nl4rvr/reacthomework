import React from 'react'
import Card from '../Card/Card'
import s from './Cards.module.sass'

export default function Cards() {
    const listCard = [
        {
            text: 'Годовое ТО',
            color: '#22356F',
        },
        {
            text: 'Выравнивание колес',
            color: '#0052C1',
        },
        {
            text: 'Настройка переключателей',
            color: '#76B58B',
        }
    ]

    return (
        <div className={s.cards}>
            {listCard.map((t) => <Card 
                                    text = {t.text}
                                    color = {t.color}
                                />)}
        </div>
    )
}

import React from 'react'
import s from './SectionComment.module.sass'

export default function SectionComment() {
  return (
    <div className={s.block}>
      <p>
        Приехав к нам однажды, многие наши клиенты становятся постоянными,
        а часть из них даже друзьями. А также в нашей мастерской можно
        отремонтировать электросамокат и электровелосипед.
      </p>
    </div>
  )
}

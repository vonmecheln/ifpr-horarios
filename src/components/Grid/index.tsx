import React from 'react'
import { Container } from './styles'
import { Header } from '../Header'
import { Sidebar, TimeProps } from '../Sidebar'
import { Timetable, WeekClassesProps } from '../Timetable'
import { findPositionY } from '@site/src/utils/find-position-y'
import { reduceTimetable } from '@site/src/utils/reduce-timetable'
import { formatComponent } from '@site/src/utils/format-component'

export interface GridProps {
  title: string;
  time: Array<TimeProps>;
  weekClasses: Array<WeekClassesProps>;
}
  
export function Grid ({ title, time, weekClasses}: GridProps) {
  findPositionY({weekClasses, time})
  formatComponent({weekClasses, title})
  // const numbersBetween = reduceTimetable(weekClasses)
  // time = time.slice(numbersBetween[0], numbersBetween[1])

  let rowsSize = ''
  let columnsSize = `10fr 90fr`
  time.forEach(el => {
    rowsSize += ` ${el.size}fr`
  })
  let size = 0;
  time.forEach(el => {
    size += el.size
  })
  

  return(
    <Container columns={columnsSize} size={size}>
      <Header title={title}/>
      <Sidebar timeClasses={time} rows={`100px${rowsSize}`}/>
      <Timetable timetable={{weekClasses, rowsSize}} time={time}/>
    </Container>
  )
}

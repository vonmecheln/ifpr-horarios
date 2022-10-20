import React from 'react'
import { Container } from './styles'
import { Header } from '../Header'
import { Sidebar, TimeProps } from '../Sidebar'
import { Timetable, WeekClassesProps } from '../Timetable'
import { findPositionY } from '@site/src/utils/find-position-y'

interface GridProps {
  title: string;
  time: Array<TimeProps>;
  weekClasses: Array<WeekClassesProps>;
}
  
export function Grid ({ title, time, weekClasses}: GridProps) {
  
    let rowsSize = ''
    let columnsSize = `10fr 90fr`
    time.forEach(el => {
      rowsSize += ` ${el.size}fr`
    })
    let size = 0;
    time.forEach(el => {
      size += el.size
    })

    findPositionY({weekClasses, time})

    return(
    <Container columns={columnsSize} rows={rowsSize} size={size}>
      <Header title={title}/>
      <Sidebar timeClasses={time} rows={`100px${rowsSize}`}/>
      <Timetable timetable={{weekClasses, rowsSize}} time={time}/>
    </Container>
  )
}

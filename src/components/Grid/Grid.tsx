import React from 'react'
import { Container } from './styles'
import Header from '../Header'
import Sidebar, { TimeProps } from '../Sidebar'
import TableTime, {  ClassesProps} from '../Timetable'

interface GridProps {
  title: string;
  weekDays: Array<string>;
  time: Array<TimeProps>;
  listClasses: Array<ClassesProps>;
}

  
const Grid = ({ title, weekDays, time, listClasses}: GridProps) => {
    let columns = `10fr repeat(${weekDays.length}, minmax(35px, ${90/weekDays.length}fr))`
    let rows = "50px 50px"  
    time.forEach(el => {
      rows += ` ${el.size}fr`
    })
    let size = 0;
    time.forEach(el => {
      size += el.size
    })
    return(
    <Container columns={columns} rows={rows} size={size}>
      <Header weekDays={weekDays} title={title}/>
      <Sidebar timeClasses={time}/>
      <TableTime listClasses={listClasses} rows={time.length} cols={weekDays.length} title={title}/>
    </Container>
  )
}

export default Grid
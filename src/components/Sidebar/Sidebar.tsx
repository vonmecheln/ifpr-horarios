import React from 'react'
import { Cell } from '../../css/Cell'

export interface TimeClassesProps {
  time: string;
  size?: number;
}

export default function Sidebar(props: {timeClasses: Array<TimeClassesProps>}) {
  let timeOffSet = 3
  return(
    <>
      <Cell gridArea="1 / 1 / 3 / 2"></Cell>
      {
        props.timeClasses.map(timeEl => 
          <Cell 
          gridArea= {`${timeOffSet} / 1 / ${timeOffSet++} / 2`} key={timeEl.time}>
            <span>{timeEl.time}</span>
          </Cell>  
        )
      } 
    </>
  )
}

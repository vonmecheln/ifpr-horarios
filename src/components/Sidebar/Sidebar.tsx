import React from 'react'
import { Cell } from '../../css/Cell'

export interface TimeProps {
  time: string;
  size?: number;
}

export default function Sidebar(props: {timeClasses: Array<TimeProps>}) {
  let timeOffSet = 3
  return(
    <>
      <Cell gridArea="1 / 1 / 3 / 2"></Cell>
      {
        props.timeClasses.map(timeEl => 
          <Cell 
          gridArea= {`${timeOffSet} / 1 / ${timeOffSet++} / 2`} key={timeEl.time}>
            <span className="text-time">{timeEl.time}</span>
          </Cell>  
        )
      } 
    </>
  )
}

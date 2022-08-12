import React from 'react'
import { Cell } from '../../css/Cell'

export interface WeekProps{
  weekDays: Array<string>;
  title: string;
}

export default function Header(props: WeekProps) {
  let dayOffSet = 2;
  return (
    <>
      <Cell gridArea= {`1 / 2 / 2 / ${props.weekDays.length + 2}`}>
        <strong>{props.title}</strong>
      </Cell>
      {
        props.weekDays.map(day =>
          <Cell 
          gridArea = {`2 / ${dayOffSet} / 3 / ${dayOffSet++}`} 
          key={day}>
            <span className='text-day'>{day}</span>
          </Cell>
        )
      }
    </>
  ) 
}
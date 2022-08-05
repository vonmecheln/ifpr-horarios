import React from 'react'
import { Cell } from '../../css/Cell'

export interface HeaderProps{
  weekDays: Array<string>;
  title: string;
}

export default function Header(props: HeaderProps) {
  let dayOffSet = 2;
  return (
    <>
      <Cell gridArea= {`1 / 2 / 2 / ${props.weekDays.length + 2}`}>
        <span>{props.title}</span>
      </Cell>
      {
        props.weekDays.map(day =>
          <Cell 
          gridArea = {`2 / ${dayOffSet} / 3 / ${dayOffSet++}`} 
          key={day}>
            <span>{day}</span>
          </Cell>
        )
      }
    </>
  ) 
}
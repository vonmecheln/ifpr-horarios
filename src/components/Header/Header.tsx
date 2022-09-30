import React from 'react'
import { Cell } from '../../css/Cell'
import { Container } from './styles';

export interface WeekProps{
  weekDays: Array<string>;
  title: string;
}

export default function Header(props: WeekProps) {
  let dayOffSet = 1;
  return (
    <Container rowEnd={`${props.weekDays.length + 2}`} columns={`${props.weekDays.length}`}>
      <div>
        <strong>{props.title}</strong>
      </div>
        {/* {
          props.weekDays.map(day =>
            <Cell 
            gridArea = {`2 / ${dayOffSet} / 3 / ${++dayOffSet}`} 
            key={day}>
              <span className='text-day'>{day}</span>
            </Cell>
          )
        } */}
    </Container>
  ) 
}
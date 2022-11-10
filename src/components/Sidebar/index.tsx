import * as Dialog from '@radix-ui/react-dialog';
import React from 'react'
import { Cell } from '../../css/Cell'
import { ModalEdit } from '../ModalEdit';
import { Container } from './styles';

export interface TimeProps {
  time: string;
  size?: number;
}

export function Sidebar(props: {timeClasses: Array<TimeProps>, rows: string}) {
  let timeOffSet = 2
  return(
    <Container rows={`${props.rows}`}>
      <Cell gridArea="1 / 1 / 2 / 2" className="sidebar">
        <ModalEdit/>
      </Cell>
      {
          props.timeClasses.map(timeEl => 
            <Cell className="sidebar"
            gridArea= {`${timeOffSet} / 1 / ${timeOffSet++} / 2`} key={timeEl.time}>
              <span className="text-time">{timeEl.time}</span>
            </Cell>
          )
      } 
    </Container>
  )
}

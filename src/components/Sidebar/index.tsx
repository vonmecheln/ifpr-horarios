import * as Dialog from '@radix-ui/react-dialog';
import React from 'react'
import { Cell } from '../../css/Cell'
import { ModalSettings, ModalSettingsProps } from '../ModalSettings';
import { Container } from './styles';

export interface TimeProps {
  time: string;
  size?: number;
}

export interface SidebarProps {
  timeClasses: Array<TimeProps>;
  rows: string;
  modal: ModalSettingsProps;
}

export function Sidebar({ timeClasses, modal, rows }: SidebarProps) {
  let timeOffSet = 2
  return(
    <Container rows={`${rows}`}>
      <Cell gridArea="1 / 1 / 2 / 2" className="sidebar">
        <ModalSettings 
          setIsMenuFixed={modal.setIsMenuFixed} 
          isMenuFixed={modal.isMenuFixed}
          setTimetableView={modal.setTimetableView}
          timetableView={modal.timetableView}
          downloadScreenshot={modal.downloadScreenshot}
        />
      </Cell>
      {
          timeClasses.map(timeEl => 
            <Cell className="sidebar"
            gridArea= {`${timeOffSet} / 1 / ${timeOffSet++} / 2`} key={timeEl.time}>
              <span className="text-time">{timeEl.time}</span>
            </Cell>
          )
      } 
    </Container>
  )
}

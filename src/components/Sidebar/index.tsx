import React, { useContext } from 'react'

import { useScreenshot, createFileName } from 'use-react-screenshot'
import { GridContext } from '../Grid'
import { ModalSettings, ModalSettingsProps } from '../ModalSettings'

import { Cell } from '../../css/Cell'
import { Container } from './styles'

export interface TimeProps {
  time: string
  size?: number
}

export interface SidebarProps {
  timeClasses: Array<TimeProps>
  // rows: string;
  modal: ModalSettingsProps
}

export function Sidebar() {
  const { timeChanged } = useContext(GridContext)

  let timeOffSet = 2

  const { rowsSize, title, gridRef } = useContext(GridContext)

  const [image, takeScreenShot] = useScreenshot({
    type: 'image/png',
    quality: 2.0,
  })

  const download = (
    image: string,
    { name = title, extension = 'png' } = {},
  ) => {
    const a = document.createElement('a')
    a.href = image
    a.download = createFileName(extension, name)
    a.click()
  }

  const downloadScreenshot = () =>
    takeScreenShot(gridRef.current).then(download)

  return (
    <Container rowsSize={`${rowsSize}`}>
      <Cell gridArea="1 / 1 / 2 / 2" className="sidebar">
        <ModalSettings downloadScreenshot={downloadScreenshot} />
      </Cell>
      {timeChanged.map((timeEl) => (
        <Cell
          className="sidebar"
          gridArea={`${timeOffSet} / 1 / ${timeOffSet++} / 2`}
          key={timeEl.time}
        >
          <span className="text-time">{timeEl.time}</span>
        </Cell>
      ))}
    </Container>
  )
}

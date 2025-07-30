import React, { useContext } from 'react'

import html2canvas from 'html2canvas';
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

  function createFileName(extension: string, name: string) {
    const date = new Date()
    const formattedDate = date.toISOString().replace(/[:.]/g, '-')
    return `${name}-${formattedDate}.${extension}`
  }

  const downloadScreenshot = () => takeScreenShot(gridRef.current).then(download)

  function takeScreenShot(canva: HTMLElement): Promise<HTMLCanvasElement> {
    return html2canvas(canva, {
      useCORS: true,
      allowTaint: true,
      scale: 4, // Increase scale for better quality
    })
  }

  function download(image: HTMLCanvasElement) {
    const link = document.createElement('a');
    link.download = createFileName('png', title)
    link.href = image.toDataURL('image/png');
    link.click();
  }

  return (
    <Container $rowsSize={`${rowsSize}`}>
      <Cell $gridArea="1 / 1 / 2 / 2" className="sidebar">
        <ModalSettings downloadScreenshot={downloadScreenshot} />
      </Cell>
      {timeChanged.map((timeEl) => (
        <Cell
          className="sidebar"
          $gridArea={`${timeOffSet} / 1 / ${timeOffSet++} / 2`}
          key={timeEl.time}
        >
          <span className="text-time">{timeEl.time}</span>
        </Cell>
      ))}
    </Container>
  )
}

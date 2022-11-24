import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../Header'
import { Sidebar, TimeProps } from '../Sidebar'
import { Timetable, WeekClassesProps } from '../Timetable'
import { findPositionY } from '@site/src/utils/find-position-y'
import { reduceTimetable } from '@site/src/utils/reduce-timetable'
import { createLinkToTheCell } from '@site/src/utils/create-link-to-the-cell'
import { useScreenshot, createFileName } from "use-react-screenshot";
import { Container } from './styles'
import { Footer } from '../Footer'
import { updateLocalStorage } from '@site/src/utils/update-local-storage'
import { getItemFromLocalStorage } from '@site/src/utils/get-item-from-local-storage'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

export interface GridProps {
  title?: string;
  time: Array<TimeProps>;
  weekClasses: Array<WeekClassesProps>;
  textFooter?: string;
}

function setGridTemplateRows(textFooter: string) {
  let gridTemplateRows = '50px 1fr'
  return textFooter ? gridTemplateRows+=' 50px' : gridTemplateRows
}

export function Grid ({ title, time, weekClasses, textFooter }: GridProps) {
  let settingsOfTime 
  if (ExecutionEnvironment.canUseDOM) {
    settingsOfTime = getItemFromLocalStorage()
  }
  const [isMenuFixed, setIsMenuFixed] = useState<boolean>(settingsOfTime?.isMenuFixed ?? false)
  const [timetableView, setTimetableView] = useState<string>(settingsOfTime?.timetableView ?? 'completed')
  const gridRef = useRef()
  const [image, takeScreenShot] = useScreenshot({
    type: "image/png",
    quality: 2.0
  });
  const download = (image: string, { name = title, extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image; 
    a.download = createFileName(extension, name);
    a.click();
  };
   
  const downloadScreenshot = () => takeScreenShot(gridRef.current).then(download);

  findPositionY({weekClasses, time})
  createLinkToTheCell({weekClasses, title})
  let [timeFormatted, weekClassesFormatted] = reduceTimetable({weekClasses, time, timetableView})
  time = timeFormatted
  weekClasses = weekClassesFormatted
  findPositionY({weekClasses, time})

  let rowsSize = ''
  let gridColumns = `10fr 90fr`
  time.forEach(el => {
    rowsSize += ` ${el.size}fr`
  })
  
  
  if (ExecutionEnvironment.canUseDOM) {
    useEffect(() => {
      updateLocalStorage({isMenuFixed, timetableView})
    }, [isMenuFixed, timetableView])
  }
  
  return(
    <Container gridColumns={gridColumns} gridRows={setGridTemplateRows(textFooter)} ref={gridRef}>
      <Header title={title}/> 
      <Sidebar 
        timeClasses={time} 
        rows={`100px${rowsSize}`}
        modal={{setIsMenuFixed, isMenuFixed, setTimetableView, timetableView, downloadScreenshot}}
      />
      <Timetable 
        weekClasses={weekClasses} 
        rowsSize={rowsSize} 
        time={time} 
        isMenuFixed={isMenuFixed}
      />
      {
        textFooter ? <Footer textFooter={textFooter}/> : ''
      }
    </Container>
  )
}

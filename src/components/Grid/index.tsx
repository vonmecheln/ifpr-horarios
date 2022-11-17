import React, { useRef, useState } from 'react'
import { Header } from '../Header'
import { Sidebar, TimeProps } from '../Sidebar'
import { Timetable, WeekClassesProps } from '../Timetable'
import { findPositionY } from '@site/src/utils/find-position-y'
import { reduceTimetable } from '@site/src/utils/reduce-timetable'
import { createLinkToTheCell } from '@site/src/utils/create-link-to-the-cell'
import { useScreenshot, createFileName } from "use-react-screenshot";
import { Container } from './styles'

export interface GridProps {
  title: string;
  time: Array<TimeProps>;
  weekClasses: Array<WeekClassesProps>;
}

export function Grid ({ title, time, weekClasses }: GridProps) {
  const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false)
  const [timetableView, setTimetableView] = useState<string>('completed')
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
  let columnsSize = `10fr 90fr`
  time.forEach(el => {
    rowsSize += ` ${el.size}fr`
  })
  
  return(
    <Container columns={columnsSize} ref={gridRef}>
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
    </Container>
  )
}

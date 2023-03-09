import React, {
  createContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react'
import { Header } from '../Header'
import { Sidebar, TimeProps } from '../Sidebar'
import { Timetable, DayProps } from '../Timetable'
import { findPositionY } from '@site/src/utils/find-position-y'
import { reduceTimetable } from '@site/src/utils/reduce-timetable'
import { createLinkToTheCell } from '@site/src/utils/create-link-to-the-cell'
// import { useScreenshot, createFileName } from 'use-react-screenshot'
// import { Container } from './styles'
// import { Footer } from '../Footer'
// import { updateLocalStorage } from '@site/src/utils/update-local-storage'
// import { getItemFromLocalStorage } from '@site/src/utils/get-item-from-local-storage'
// import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
// import { defineColorBase } from '@site/src/utils/define-color-base'
// import { settingsReducer } from '@site/src/reducers/settings/reducer'

// export interface GridProps {
//   title?: string
//   time: Array<TimeProps>
//   weekClasses: Array<DayProps>
//   textFooter?: string
// }

// function setGridTemplateRows(textFooter: string) {
//   let gridTemplateRows = '50px 1fr'
//   return textFooter ? (gridTemplateRows += ' 50px') : gridTemplateRows
// }

// interface SettingsOfTimeProps {
//   isMenuFixed: boolean
//   timetableView: 'completed' | 'condensed' | 'superCondensed' | undefined
// }

// export function Grid({ title, time, weekClasses, textFooter }: GridProps) {
//   // const settingsOfTime: SettingsOfTimeProps = {
//   //   isMenuFixed: false,
//   //   timetableView: 'completed',
//   // }

//   // const [isMenuFixed, setIsMenuFixed] = useState<boolean>(
//   //   settingsOfTime.isMenuFixed,
//   // )
//   // const [timetableView, setTimetableView] = useState<string>(
//   //   settingsOfTime.timetableView,
//   // )
//   const gridRef = useRef()
//   const [image, takeScreenShot] = useScreenshot({
//     type: 'image/png',
//     quality: 2.0,
//   })

//   const download = (
//     image: string,
//     { name = title, extension = 'png' } = {},
//   ) => {
//     const a = document.createElement('a')
//     a.href = image
//     a.download = createFileName(extension, name)
//     a.click()
//   }

//   const downloadScreenshot = () =>
//     takeScreenShot(gridRef.current).then(download)

//   findPositionY({ weekClasses, time })
//   createLinkToTheCell({ weekClasses, title })
//   const [timeFormatted, weekClassesFormatted] = reduceTimetable({
//     weekClasses,
//     time,
//     timetableView,
//   })
//   time = timeFormatted
//   weekClasses = weekClassesFormatted
//   findPositionY({ weekClasses, time })

//   defineColorBase({ weekClasses, title })

  // const rowsSize = ''
  // const gridColumns = `10fr 90fr`
  // time.forEach((el) => {
  //   rowsSize += ` ${el.size}fr`
  // })

  // useEffect(() => {
  //   updateLocalStorage({ isMenuFixed, timetableView })
  // }, [isMenuFixed, timetableView])

  return (
    <GridContext.Provider value={{ rowsSize }}>
      <Container
        gridColumns={gridColumns}
        gridRows={setGridTemplateRows(textFooter)}
        ref={gridRef}
      >
        <Header title={title} />
        <Sidebar
          timeClasses={time}
          // rows={`100px${rowsSize}`}
          modal={{
            setIsMenuFixed,
            isMenuFixed,
            setTimetableView,
            timetableView,
            downloadScreenshot,
          }}
        />
        <Timetable
          weekClasses={weekClasses}
          // rowsSize={rowsSize}
          time={time}
          isMenuFixed={isMenuFixed}
        />
        {textFooter ? <Footer textFooter={textFooter} /> : ''}
      </Container>
    </GridContext.Provider>
  )
}

import React, { createContext, useEffect, useReducer, useRef } from 'react'

import { settingsReducer } from '@site/src/reducers/settings/reducer'

import { Days, GridContextType, Time } from '@site/src/interfaces/interfaces'
import { GridContainer } from './styles'
import { findPositionY } from '@site/src/utils/find-position-y'
import { createLinkToTheCell } from '@site/src/utils/create-link-to-the-cell'
import { reduceTimetable } from '@site/src/utils/reduce-timetable'
import { defineColorBase } from '@site/src/utils/define-color-base'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { Timetable } from '../Timetable'
import { Footer } from '../Footer'
import {
  changeMenu,
  changeTimetableView,
} from '@site/src/reducers/settings/actions'

interface GridProps {
  title?: string
  time: Time[]
  weekClasses: Days[]
  textFooter?: string
}

function setGridTemplateRows(textFooter: string) {
  let gridTemplateRows = '50px 1fr'
  return textFooter ? (gridTemplateRows += ' 50px') : gridTemplateRows
}

export const GridContext = createContext({} as GridContextType)

export function Grid({ title, time, weekClasses, textFooter }: GridProps) {
  const [settingsState, dispatch] = useReducer(
    settingsReducer,
    {
      settings: {
        isMenuFixed: false,
        timetableView: 'completed',
      },
      timeChanged: time,
      weekClassesChanged: weekClasses,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem('settings-of-time')

      if (storedStateAsJSON) {
        initialState.settings = JSON.parse(storedStateAsJSON)
      }

      initialState.weekClassesChanged = findPositionY({ weekClasses, time })

      initialState.weekClassesChanged = createLinkToTheCell({
        weekClasses,
        title,
      })
      initialState.weekClassesChanged = defineColorBase({
        weekClasses,
        title,
      })

      return initialState
    },
  )

  const { settings, timeChanged, weekClassesChanged } = settingsState
  console.log(timeChanged)
  console.log(weekClassesChanged)

  const { timetableView, isMenuFixed } = settings

  const rowsSize = time.reduce((acc, elemento) => {
    return (acc += ` ${elemento.size}fr`)
  }, '')

  const gridRef = useRef()
  // const [timeFormatted, weekClassesFormatted] = reduceTimetable({
  //   weekClasses,
  //   time,
  //   timetableView,
  // })
  // time = timeFormatted
  // weekClasses = weekClassesFormatted
  // findPositionY({ weekClasses, time })

  useEffect(() => {
    const stateJSON = JSON.stringify(settings)

    localStorage.setItem('settings-of-time', stateJSON)
  }, [settings])

  return (
    <GridContext.Provider
      value={{
        title,
        timeChanged,
        weekClassesChanged,
        timetableView,
        isMenuFixed,
        rowsSize,
        gridRef,
        changeMenu,
        changeTimetableView,
      }}
    >
      <GridContainer gridRows={setGridTemplateRows(textFooter)} ref={gridRef}>
        <Header />
        <Sidebar />
        <Timetable />
        {/* {textFooter ? <Footer textFooter={textFooter} /> : ''} */}
      </GridContainer>
    </GridContext.Provider>
  )
}

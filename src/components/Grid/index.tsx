import React, { createContext, useEffect, useReducer, useRef } from 'react'

import {
  settingsReducer,
  TimetableViewType,
} from '@site/src/reducers/settings/reducer'

import { Days, GridContextType, Time } from '@site/src/interfaces/interfaces'
import { GridContainer } from './styles'
import { findPositionY } from '@site/src/utils/find-position-y'
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
import { createLinkToEachClass } from '@site/src/utils/create-link-to-each-class'

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

function setWeekClassesSettings(
  weekClasses: Days[],
  title: string,
  time: Time[],
) {
  let newWeekClasses = []
  // newWeekClasses = findPositionY({ weekClasses, time })
  newWeekClasses = createLinkToEachClass({
    weekClasses,
    title,
  })
  newWeekClasses = defineColorBase({
    weekClasses,
    title,
  })
  return newWeekClasses
}

export const GridContext = createContext({} as GridContextType)

export function Grid({ title, time, weekClasses, textFooter }: GridProps) {
  // console.log(weekClasses)

  const [settingsState, dispatch] = useReducer(
    settingsReducer,
    {
      settings: {
        isMenuFixed: false,
        timetableView: 'completed',
      },
      timeChanged: [],
      weekClassesChanged: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem('settings-of-time')
      const newWeekClasses = setWeekClassesSettings(weekClasses, title, time)

      if (storedStateAsJSON) {
        initialState.settings = JSON.parse(storedStateAsJSON)
      }

      const timetableViewInitial = initialState.settings.timetableView
      const { timeChanged, weekClassesChanged } = reduceTimetable({
        weekClasses: newWeekClasses,
        time,
        timetableView: timetableViewInitial,
      })

      return {
        ...initialState,
        weekClassesChanged,
        timeChanged,
      }
    },
  )
  const { settings, timeChanged, weekClassesChanged } = settingsState
  const { timetableView, isMenuFixed } = settings

  function reduceGrid(newTimetableView: TimetableViewType) {
    const data = {
      timetableView: newTimetableView,
      timeInitial: time,
      weekClassesInitial: weekClasses,
    }
    dispatch(changeTimetableView(data))
  }

  function modifyMenu(data: boolean) {
    dispatch(changeMenu(data))
  }

  const rowsSize = timeChanged.reduce((acc, elemento) => {
    return (acc += ` ${elemento.size}fr`)
  }, '')

  const gridRef = useRef(null)

  useEffect(() => {
    const { settings } = settingsState
    const stateJSON = JSON.stringify(settings)

    localStorage.setItem('settings-of-time', stateJSON)
  }, [settingsState])

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
        modifyMenu,
        reduceGrid,
        weekClassesInitial: weekClasses,
        timeInitial: time,
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

import { Days, Time } from '@site/src/interfaces/interfaces'
import { findPositionY } from '@site/src/utils/find-position-y'
import { findPositionsUsed } from '@site/src/utils/find-positions-used'
import { reduceTimetable  } from '@site/src/utils/reduce-timetable'
import { ActionTypes } from './actions'

export const TimetableViewOptions = {
  completed: 'completed',
  condensed: 'condensed',
  superCondensed: 'superCondensed',
}

export type TimetableViewType = keyof typeof TimetableViewOptions


export const TimetableColorOptions = {
  noColor: 'noColor',
  teacherColor: 'teacherColor',
  subjectColor: 'subjectColor',
  studentsColor : 'studentsColor',
  roomColor: 'roomColor',
  allColor: 'allColor',
}

export type TimetableColorType = keyof typeof TimetableColorOptions

interface Settings {
  isMenuFixed: boolean
  timetableView: TimetableViewType
  timetableColor: TimetableColorType
}

interface SettingsState {
  settings: Settings
  weekClassesChanged: Days[]
  timeChanged: Time[]
}

export function settingsReducer(state: SettingsState, action: any) {
  switch (action.type) {
    case ActionTypes.CHANGE_MENU:
      return {
        ...state,
        settings: {
          ...state.settings,
          isMenuFixed: action.payload.isMenuFixed,
        },
      }

    case ActionTypes.CHANGE_TIMETABLE_COLOR: {

      const timetableColor = action.payload.timetableColor
      const time = action.payload.timeInitial
      const weekClasses = action.payload.weekClassesInitial

      // const newWeekClasses = setWeekClassesSettings(weekClasses, "", time, timetableColor)

      return {
        ...state,
        settings: {
          ...state.settings,
          timetableColor : action.payload.timetableColor
        }
      } 

    }

    case ActionTypes.CHANGE_TIMETABLE_VIEW: {
      const timetableView = action.payload.timetableView
      const time = action.payload.timeInitial
      const weekClasses = action.payload.weekClassesInitial

      const { weekClassesChanged, timeChanged } = reduceTimetable({
        time,
        weekClasses,
        timetableView,
      })

      return {
        timeChanged,
        weekClassesChanged,
        settings: {
          ...state.settings,
          timetableView,
        },
      }      
    }
  }
  return {
    ...state,
    settings: {
      ...state.settings,
      timetableView: action.payload.timetableView,
    },
  }
}


import { Days, Time } from '@site/src/interfaces/interfaces'
import { findPositionY } from '@site/src/utils/find-position-y'
import { findPositionsUsed } from '@site/src/utils/find-positions-used'
import { reduceTimetable } from '@site/src/utils/reduce-timetable'
import { ActionTypes } from './actions'

export const TimetableViewOptions = {
  completed: 'completed',
  condensed: 'condensed',
  superCondensed: 'superCondensed',
}

export type TimetableViewType = keyof typeof TimetableViewOptions

interface Settings {
  isMenuFixed: boolean
  timetableView: TimetableViewType
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

      // if (action.payload.timetableView === 'condensed') {
      //   const time = state.timeChanged
      //   const weekClasses = state.weekClassesChanged

      //   const timeChanged = reduceTimetable({
      //     time,
      //     weekClasses,
      //     timetableView,
      //   })
      //   return {
      //     settings: {
      //       ...state.settings,
      //       timetableView: action.payload.timetableView,
      //     },
      //     timeChanged,
      //   }
      // } else if (action.payload.timetableView === 'superCondensed') {
      //   const time = state.timeChanged
      //   const weekClasses= state.weekClassesChanged

      //   return {
      //     settings: {
      //       ...state.settings,
      //       timetableView: action.payload.timetableView,
      //     },
      //     timeChanged: time,
      //     weekClassesChanged,
      //   }
      // }
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

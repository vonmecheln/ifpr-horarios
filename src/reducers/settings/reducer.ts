import { Days, Time } from '@site/src/interfaces/interfaces'
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
  }

  return state
}

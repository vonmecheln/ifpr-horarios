import { Days, Time } from '@site/src/interfaces/interfaces'
import { TimetableViewType } from './reducer'

export enum ActionTypes {
  CHANGE_TIMETABLE_VIEW = 'CHANGE_TIMETABLE_VIEW',
  CHANGE_MENU = 'CHANGE_MENU',
}

interface ChangeTimetableViewProps {
  timetableView: TimetableViewType
  timeInitial: Time[]
  weekClassesInitial: Days[]
}

export function changeTimetableView({
  timetableView,
  timeInitial,
  weekClassesInitial,
}: ChangeTimetableViewProps) {
  return {
    type: ActionTypes.CHANGE_TIMETABLE_VIEW,
    payload: {
      timetableView,
      timeInitial,
      weekClassesInitial,
    },
  }
}

export function changeMenu(isMenuFixed: boolean) {
  return {
    type: ActionTypes.CHANGE_MENU,
    payload: {
      isMenuFixed,
    },
  }
}

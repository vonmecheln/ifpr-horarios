import { Days, Time } from '@site/src/interfaces/interfaces'
import { TimetableColorType, TimetableViewType } from './reducer'

export enum ActionTypes {
  CHANGE_TIMETABLE_VIEW = 'CHANGE_TIMETABLE_VIEW',
  CHANGE_MENU = 'CHANGE_MENU',
  CHANGE_TIMETABLE_COLOR = 'CHANGE_TIMETABLE_COLOR',
}

interface ChangeTimetableViewProps {
  timetableView: TimetableViewType
  timeInitial: Time[]
  weekClassesInitial: Days[]
}

interface ChangeTimetableColorProps {
  timetableColor: TimetableColorType
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

export function changeTimetableColor({
  timetableColor,
}: ChangeTimetableColorProps) {
  return {
    type: ActionTypes.CHANGE_TIMETABLE_COLOR,
    payload: {
      timetableColor,
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

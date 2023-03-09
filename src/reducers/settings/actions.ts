import { TimetableViewType } from './reducer'

export enum ActionTypes {
  CHANGE_TIMETABLE_VIEW = 'CHANGE_TIMETABLE_VIEW',
  CHANGE_MENU = 'CHANGE_MENU',
}

export function changeTimetableView(timetableView: TimetableViewType) {
  return {
    type: ActionTypes.CHANGE_TIMETABLE_VIEW,
    payload: {
      timetableView,
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

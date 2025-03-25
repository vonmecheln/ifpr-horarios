import React, { ReactNode } from 'react'
import { TimetableViewType } from '../reducers/settings/reducer'

interface LinksType {
  title: string
  url: string
}

export interface Classes {
  subject: string
  size: number
  teachers?: string[]
  classroom?: string
  students?: string[]
  time: string
  positionY?: number
  links?: LinksType[]
  color?: string
}

export interface Time {
  time: string
  size?: number
}

export interface Days {
  dayName: string
  dayClasses: Classes[]
}

export interface GridContextType {
  title: string
  timeChanged: Time[]
  weekClassesChanged: Days[]
  timeInitial: Time[]
  weekClassesInitial: Days[]
  timetableView: TimetableViewType
  isMenuFixed: boolean
  rowsSize: string
  gridRef: React.RefObject<undefined>
  modifyMenu: (isMenuFixed: boolean) => void
  reduceGrid: (timetableView: TimetableViewType) => void
}

export interface GridContextProviderProps {
  children: ReactNode
}

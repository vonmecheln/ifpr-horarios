import { Days, Time } from '../interfaces/interfaces'
import { findPositionY } from './find-position-y'
import { findPositionsUsed } from './find-positions-used'
// According to the positions used, find the min and max index of classes in the whole component. This way, we can cut off the empty space. But if the timetableView is equals to superCondensed, cut off ALL empty space.

interface ReduceTimetableProps {
  weekClasses: Days[]
  time: Time[]
  timetableView: string
}

interface ReduceTimetableReturn {
  weekClassesChanged: Days[]
  timeChanged: Time[]
}

export function reduceTimetable({
  weekClasses,
  time,
  timetableView,
}: ReduceTimetableProps): ReduceTimetableReturn {
  weekClasses = findPositionY({ weekClasses, time })
  const positions = findPositionsUsed(weekClasses)
  const positionOfFirstClass = Math.min(...positions)
  const positionOfLastClass = Math.max(...positions) + 1

  if (timetableView === 'condensed') {
    time = time.slice(positionOfFirstClass, positionOfLastClass)
  } else if (timetableView === 'superCondensed') {
    time = time.filter((value) =>
      positions.includes(time.findIndex((el) => el === value)),
    )
    weekClasses = weekClasses.filter((week) => week.dayClasses.length !== 0)
  }

  weekClasses = findPositionY({ weekClasses, time })

  const weekClassesChanged = weekClasses
  const timeChanged = time
  return { timeChanged, weekClassesChanged }
}

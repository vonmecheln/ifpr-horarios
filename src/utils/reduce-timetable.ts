import { Days, Time } from '../interfaces/interfaces'
import { findPositionsUsed } from './find-positions-used'
// According to the positions used, find the min and max index of classes in the whole component. This way, we can cut off the empty space. But if the timetableView is equals to superCondensed, cut off ALL empty space.

interface ReduceTimetableProps {
  weekClasses: Days[]
  time: Time[]
  timetableView: string
}

export function reduceTimetable({
  weekClasses,
  time,
  timetableView,
}: ReduceTimetableProps) {
  const positions = findPositionsUsed(weekClasses)
  const positionOfFirstClass = Math.min(...positions)
  const positionOfLastClass = Math.max(...positions) + 1

  if (timetableView === 'condensed') {
    return [time.slice(positionOfFirstClass, positionOfLastClass), weekClasses]
  } else if (timetableView === 'superCondensed') {
    const timeSuperCondensed = time.filter((value) =>
      positions.includes(time.findIndex((el) => el === value)),
    )
    const weekClassesSuperCondensed = weekClasses.filter(
      (week) => week.dayClasses.length !== 0,
    )

    return [timeSuperCondensed, weekClassesSuperCondensed]
  }

  return [time, weekClasses]
}

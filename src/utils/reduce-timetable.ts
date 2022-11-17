import { TimeProps } from "../components/Sidebar";
import { WeekClassesProps } from "../components/Timetable";
import { findPositionsUsed } from "./find-positions-used";
// According to the positions used, find the min and max index of classes in the whole component. This way, we can cut off the empty space. But if the timetableView is equals to superCondensed, cut off ALL empty space.

interface ReduceTimetableProps {
  weekClasses: WeekClassesProps[];
  time: TimeProps[];
  timetableView: string;
}

export function reduceTimetable({ weekClasses, time, timetableView }: ReduceTimetableProps): [TimeProps[], WeekClassesProps[]] {
  const positions = findPositionsUsed(weekClasses)[1]
  const positionsPerSlide = findPositionsUsed(weekClasses)[0]
  const minMax = [Math.min(...positions), Math.max(...positions) + 1]

  if (timetableView === 'condensed') {
    return [time.slice(...minMax), weekClasses]
  }
  else if (timetableView === 'superCondensed') {
    const timeSuperCondensed = time.filter(value => positions.includes(time.findIndex(el => el === value)))
    const weekClassesSuperCondensed = weekClasses.filter(week => week.timetable.length !== 0)
    
    return [timeSuperCondensed, weekClassesSuperCondensed]
  }

  return [time, weekClasses]
}
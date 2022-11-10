import { WeekClassesProps } from "../components/Timetable";
import { findPositionsUsed } from "./find-positions-used";
// According to the positions used, find the min and max index of classes in the whole component. This way, we can cut off the empty space

export function reduceTimetable(weekClasses: WeekClassesProps[]) {
  const positions = findPositionsUsed(weekClasses)[1]
  return [Math.min(...positions), Math.max(...positions) + 2]
}
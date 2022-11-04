import { WeekClassesProps } from "../components/Timetable";
import { findPositionsUsed } from "./find-positions-used";

export function reduceTimetable(weekClasses: WeekClassesProps[]) {
  const positions = findPositionsUsed(weekClasses)[1]
  return [Math.min(...positions), Math.max(...positions) + 2]
}
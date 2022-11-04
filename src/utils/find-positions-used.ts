import { WeekClassesProps } from "../components/Timetable"

export function findPositionsUsed(weekClasses: WeekClassesProps[]) {
  let positionsPerSlide = []
  let positionsUsed = []
  let positionY = []
  
  weekClasses.map(week => {
    positionY = []
    week.timetable.map(el => {
      positionY.push(el.y - 2)
      for (let i = 1; i < el.size; i++) {
        positionY.push((el.y - 2) + i)
      }
    })
    positionsPerSlide.push(positionY)
    positionsUsed.push(...positionY)
  })
  
  return [positionsPerSlide, positionsUsed];
}
import { DayProps } from "../components/Timetable"
// Find all the positions Y used and return a array with two positions:
// position one -> Positions used by slide
// position two -> All positions used

export function findPositionsUsed(weekClasses: DayProps[]) {
  let positionsPerSlide = []
  let positionsUsed = []
  let positionY = []
  
  weekClasses.forEach(week => {
    positionY = []
    week.dayClasses.forEach(el => {
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
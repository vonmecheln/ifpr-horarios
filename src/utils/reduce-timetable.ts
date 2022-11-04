import { WeekClassesProps } from "../components/Timetable";

export function reduceTimetable(weekClasses: WeekClassesProps[]) {
  let positionY: number[] = []

  weekClasses.map(week => {
    week.timetable.map(el => {
      positionY.push(el.y - 2, (el.y - 2) + el.size)
      console.log(el.y);
      
    })
  })
  console.log([Math.min(...positionY), Math.max(...positionY)]);
  console.log(positionY);
  
  return [Math.min(...positionY), Math.max(...positionY) + 2]
}
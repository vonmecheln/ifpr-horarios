import { ClassesProps, WeekClassesProps } from "../components/Timetable";

export function createGroupItems(timetable: ClassesProps[]) {
    let dict = {}

    timetable.forEach(el => {
      if (!dict[el.time]) {
        dict[el.time] = []
      }
      dict[el.time].push(el)
    })
    
  return dict
}
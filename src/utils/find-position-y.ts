import { TimeProps } from "../components/Sidebar";
import { WeekClassesProps } from "../components/Timetable";
// Analyse the time of the class and add a value to the property 'y' based on index of the time

export function findPositionY(props: {weekClasses: WeekClassesProps[], time: TimeProps[]}){
  props.weekClasses.map(week => {
    week.timetable.map(el => {
      el.y = props.time.findIndex(timeItem => timeItem.time === el.time) + 2
    })
  })
}
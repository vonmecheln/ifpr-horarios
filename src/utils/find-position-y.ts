import { TimeProps } from "../components/Sidebar";
import { DayProps } from "../components/Timetable";
// Analyse the time of the class and add a value to the property 'y' based on index of the time

export function findPositionY(props: {weekClasses: DayProps[], time: TimeProps[]}){
  props.weekClasses.map(week => {
    week.dayClasses.map(el => {
      el.y = props.time.findIndex(timeItem => timeItem.time === el.time) + 2
    })
  })
}
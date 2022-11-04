import { TimeProps } from "../components/Sidebar";
import { WeekClassesProps } from "../components/Timetable";

export function findPositionY(props: {weekClasses: WeekClassesProps[], time: TimeProps[]}){
  props.weekClasses.map(week => {
    week.timetable.map(el => {
      el.y = props.time.findIndex(timeItem => timeItem.time === el.time) + 2
    })
  })
}
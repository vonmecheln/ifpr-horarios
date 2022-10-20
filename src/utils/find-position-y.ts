import { TimeProps } from "../components/Sidebar";
import { ClassesProps, WeekClassesProps } from "../components/Timetable";

export function findPositionY(props: {weekClasses: WeekClassesProps[], time: TimeProps[]}){
  props.weekClasses.map(week => {
    week.timetable.map(el => {
      el.y = props.time.findIndex(timeItem => timeItem.time === el.time) + 2
      console.log(el.time);
      console.log(el.y);
      
    })
  })
}
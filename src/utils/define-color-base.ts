import { TimeProps } from "../components/Sidebar";
import { WeekClassesProps } from "../components/Timetable";
import ColorHash from 'color-hash'
//Create a color using HSL function to each card based on teacher or students name 

export function defineColorBase(props: {weekClasses: WeekClassesProps[], title: String}){
    props.weekClasses.map(week => {
      week.timetable.map(el => {
        // let colorBase = props.title == el.teacher ? el.students : el.teacher
        let colorBase = props.title == el.students ? el.teacher : el.students
        el.color = `${new ColorHash().hsl(colorBase)}`
      })
    })
  }
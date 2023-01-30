import { TimeProps } from "../components/Sidebar";
import { DayProps } from "../components/Timetable";
import ColorHash from 'color-hash'
//Create a color using HSL function to each card based on teacher or students name 

export function defineColorBase(props: {weekClasses: DayProps[], title: String}){
    props.weekClasses.map(week => {
      week.dayClasses.map(el => {
        // let colorBase = props.title == el.teacher ? el.students : el.teacher
        el.teachers.map(teacher => {
          let colorBase = props.title == el.students ? teacher : el.students
          el.color = `${new ColorHash().hsl(colorBase)}`
        })
      })
    })
  }
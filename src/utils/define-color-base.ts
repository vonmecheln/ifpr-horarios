import ColorHash from 'color-hash'
import { Days } from '../interfaces/interfaces'
// Create a color using HSL function to each card based on teacher or students name
export function defineColorBase(props: { weekClasses: Days[]; title: String }) {
  return props.weekClasses.map((week) => {
    return {
      ...week,
      dayClasses: week.dayClasses.map((el) => {
        // let colorBase = props.title == el.teacher ? el.students : el.teacher
        el.teachers.forEach((teacher) => {
          const colorBase = props.title === el.students ? teacher : el.students
          el.color = `${new ColorHash().hsl(colorBase)}`
        })
        return el
      }),
    }
  })
}

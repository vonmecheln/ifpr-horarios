import ColorHash from 'color-hash'
import { Days } from '../interfaces/interfaces'
// Create a color using HSL function to each card based on teacher or students name
export function defineColorBase(props: { weekClasses: Days[]; title: String }) {
  return props.weekClasses.map((week) => {
    return {
      ...week,
      dayClasses: week.dayClasses.map((el) => {
        // let colorBase = props.title == el.teacher ? el.students : el.teacher
        const labels = []
        el.teachers.forEach((teacher) => {
          if (props.title !== teacher) {
            labels.push(teacher)
          }
        })
        if (props.title !== el.classroom) {
          labels.push(el.classroom)
        }
        el.students.forEach((student) => {
          if (props.title !== student) {
            labels.push(student)
          }
        })

        const text = labels.join('-')
        el.color = `${new ColorHash().hsl(text)}`

        return el
      }),
    }
  })
}

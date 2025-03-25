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
        const useTitle = true;

        labels.push(el.subject)
        el.teachers.forEach((teacher) => {
          if (useTitle || props.title !== teacher) {
            labels.push(teacher)
          }
        })
        if (useTitle || props.title !== el.classroom) {
          labels.push(el.classroom)
        }
        el.students.forEach((student) => {
          if (useTitle || props.title !== student) {
            labels.push(student)
          }
        })

        const text = labels.join('-')
        const ch = new ColorHash({
          lightness: 0.5,
          hue: { min: 90, max: 360 },
          saturation: 0.45,
        })

        el.color = `${ch.hsl(text)}`

        return el
      }),
    }
  })
}
